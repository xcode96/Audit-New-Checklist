
import React, { useState } from 'react';
import Card from './Card';
import type { Category } from '../types';

interface GitHubSyncProps {
  categories: Category[];
}

const GitHubSync: React.FC<GitHubSyncProps> = ({ categories }) => {
  const [owner, setOwner] = useState('');
  const [repo, setRepo] = useState('');
  const [path, setPath] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!owner || !repo || !path || !token) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }
    
    setLoading(true);
    setStatus({ type: 'info', message: 'Syncing...' });

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const headers = {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'X-GitHub-Api-Version': '2022-11-28'
    };

    try {
      let sha: string | undefined;
      // 1. Get the current file to get its SHA for updating
      try {
        const getResponse = await fetch(apiUrl, { headers });
        if (getResponse.ok) {
          const fileData = await getResponse.json();
          sha = fileData.sha;
        } else if (getResponse.status !== 404) {
           const errorData = await getResponse.json();
           throw new Error(`Failed to get file info: ${errorData.message || getResponse.statusText}`);
        }
        // If 404, file doesn't exist, sha remains undefined, which is correct for file creation.
      } catch (err) {
        // Log non-404 fetch errors but attempt to proceed, as it might be a new file.
        console.warn('Could not fetch existing file SHA, proceeding with creation attempt.', err);
      }

      // 2. Prepare content and PUT request body. btoa(unescape(encodeURIComponent(str))) is a robust way to Base64 encode UTF-8 strings.
      const content = btoa(unescape(encodeURIComponent(JSON.stringify(categories, null, 2))));
      const body = JSON.stringify({
        message: `Sync: Digital Defense Checklist update ${new Date().toISOString()}`,
        content: content,
        sha: sha,
      });

      // 3. Push the new content to GitHub
      const putResponse = await fetch(apiUrl, {
        method: 'PUT',
        headers: {...headers, 'Content-Type': 'application/json'},
        body: body,
      });

      if (!putResponse.ok) {
        const errorData = await putResponse.json();
        throw new Error(`GitHub API Error: ${errorData.message || putResponse.statusText}`);
      }

      setStatus({ type: 'success', message: 'Successfully synced to GitHub!' });

    } catch (error) {
      console.error('GitHub Sync Error:', error);
      setStatus({ type: 'error', message: (error as Error).message || 'An unknown error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
        <h3 className="text-xl font-bold text-white mb-4">Sync to GitHub</h3>
        <p className="text-sm text-gray-400 mb-4">Push your current checklist data to a file in a GitHub repository. You'll need a <a href="https://github.com/settings/tokens/new?scopes=repo" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Personal Access Token (PAT)</a> with `repo` scope.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="github-owner" className="block text-sm font-medium text-gray-400">Owner</label>
                    <input type="text" id="github-owner" value={owner} onChange={e => setOwner(e.target.value)} className="mt-1 block w-full input-style" placeholder="e.g., your-username" />
                </div>
                 <div>
                    <label htmlFor="github-repo" className="block text-sm font-medium text-gray-400">Repository</label>
                    <input type="text" id="github-repo" value={repo} onChange={e => setRepo(e.target.value)} className="mt-1 block w-full input-style" placeholder="e.g., my-checklists" />
                </div>
            </div>
            <div>
                <label htmlFor="github-path" className="block text-sm font-medium text-gray-400">File Path</label>
                <input type="text" id="github-path" value={path} onChange={e => setPath(e.target.value)} className="mt-1 block w-full input-style" placeholder="e.g., data/checklist.json" />
            </div>
            <div>
                <label htmlFor="github-token" className="block text-sm font-medium text-gray-400">Personal Access Token (PAT)</label>
                <input type="password" id="github-token" value={token} onChange={e => setToken(e.target.value)} className="mt-1 block w-full input-style" placeholder="ghp_..." />
            </div>
            <div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {loading ? 'Syncing...' : 'Push to GitHub'}
                </button>
            </div>
            {status && (
                <div className={`mt-4 text-center text-sm p-2 rounded-md ${
                    status.type === 'success' ? 'bg-emerald-500/20 text-emerald-300' : 
                    status.type === 'error' ? 'bg-rose-500/20 text-rose-300' : 'bg-sky-500/20 text-sky-300'
                }`}>
                    {status.message}
                </div>
            )}
        </form>
         <style>{`
            .input-style {
                background-color: #1a1e26;
                border: 1px solid #4a5568;
                border-radius: 0.375rem;
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
                padding: 0.5rem 0.75rem;
                color: white;
            }
            .input-style:focus {
                outline: none;
                box-shadow: 0 0 0 2px #a78bfa;
                border-color: #8b5cf6;
            }
        `}</style>
    </Card>
  );
};

export default GitHubSync;
