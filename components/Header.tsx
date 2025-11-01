
import React, { useState } from 'react';

const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LoginIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
);

interface HeaderProps {
  isAdminLoggedIn: boolean;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdminLoggedIn, onLoginClick, onLogoutClick }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="bg-[#2d3748]/50 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <ShieldIcon className="h-7 w-7 text-gray-200" />
            <span className="text-xl font-bold text-gray-100">Digital Defense</span>
          </div>
          <div className="flex items-center space-x-4">
             {isAdminLoggedIn ? (
                 <button onClick={onLogoutClick} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <LoginIcon className="h-5 w-5 transform rotate-180"/>
                    <span>Logout</span>
                 </button>
             ) : (
                <button onClick={onLoginClick} className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                    <LoginIcon className="h-5 w-5"/>
                    <span>Admin Login</span>
                </button>
             )}
            <a href="https://github.com/lissy93/personal-security-checklist" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <GithubIcon className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors bg-gray-600"
            >
              <span
                className={`${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
