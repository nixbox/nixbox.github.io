import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const books = [
  {
    title: 'The Sovereign Individual',
    author: 'J. Davidson & W. Rees-Mogg',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780684832722-L.jpg',
  },
  {
    title: 'The Price of Tomorrow',
    author: 'Jeff Booth',
    coverUrl: 'https://covers.openlibrary.org/b/id/10654900-L.jpg',
  },
  {
    title: 'The Bitcoin Standard',
    author: 'Saifedean Ammous',
    coverUrl: 'https://covers.openlibrary.org/b/id/11936602-L.jpg',
  },
  {
    title: 'Disunited Nations',
    author: 'Peter Zeihan',
    coverUrl: 'https://covers.openlibrary.org/b/id/10454302-L.jpg',
  },
  {
    title: 'Deep Thinking',
    author: 'Garry Kasparov',
    coverUrl: 'https://covers.openlibrary.org/b/id/13562599-L.jpg',
  },
  {
    title: 'The Internet of Money',
    author: 'Andreas M. Antonopoulos',
    coverUrl: 'https://covers.openlibrary.org/b/id/9412895-L.jpg',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    coverUrl: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
  },
];

const ReadingList: React.FC = () => {
  return (
    <SectionWrapper id="reading" title="Reading List">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {books.map((book, index) => (
          <div key={index} className="group relative bg-slate-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <img 
              src={book.coverUrl} 
              alt={`Cover of ${book.title}`} 
              className="w-full h-auto object-cover aspect-[2/3]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // prevent infinite loop
                target.src = 'https://picsum.photos/seed/book/400/600';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 flex flex-col justify-end">
              <h3 className="font-bold text-white text-lg leading-tight">{book.title}</h3>
              <p className="text-slate-300 text-sm">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
       <p className="text-center text-slate-400 mt-12">
        A glimpse into the ideas and authors that have shaped my thinking.
      </p>
    </SectionWrapper>
  );
};

export default ReadingList;
