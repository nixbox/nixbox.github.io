
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Interests from './components/Interests';
import ReadingList from './components/ReadingList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900 text-slate-300 font-sans leading-relaxed selection:bg-cyan-400 selection:text-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Interests />
        <ReadingList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
