
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="container mx-auto px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="border-b-4 border-cyan-400 pb-2">{title}</span>
        </h2>
        {children}
      </div>
    </section>
  );
};
