
import React from 'react';
import Card from './Card';

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

const Hero: React.FC = () => {
  return (
    <Card className="text-center py-12 md:py-16">
      <p className="text-gray-400">The Ultimate</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2">
        Personal Security Checklist
      </h1>
      <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
        Your guide to securing your digital life and protecting your privacy
      </p>
      <div className="mt-8 flex flex-col items-center">
        <ShieldIcon className="w-24 h-24 text-gray-500" />
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[#6B46C1] rounded-lg hover:bg-[#553C9A] transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          <GithubIcon className="w-6 h-6 mr-3" />
          VIEW ON GITHUB
        </a>
      </div>
    </Card>
  );
};

export default Hero;
