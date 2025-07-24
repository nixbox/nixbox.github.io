
import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/tech/1920/1080')" }}>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Qasim Javed
        </h1>
        <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8">
          Ph.D. Computer Science  |  Software Engineer  |  Lifelong Learner
        </p>
        <a href="#about" onClick={handleNavClick} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer">
          Discover More
        </a>
      </div>
    </section>
  );
};

export default Hero;
