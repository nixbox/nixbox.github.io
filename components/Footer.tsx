
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700">
      <div className="container mx-auto px-6 py-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Qasim Javed. All Rights Reserved.</p>
        <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
