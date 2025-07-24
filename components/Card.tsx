
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-2 transition-all duration-300 h-full">
      <div className="text-cyan-400 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </div>
  );
};
