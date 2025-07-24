import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';
import { AcademicCapIcon, CircleStackIcon } from '../constants';

const interestsData = [
  {
    icon: <AcademicCapIcon />,
    title: 'AI & Large Language Models',
    description: 'Experimenting with AI to expedite my learning and for building new, intelligent applications.'
  },
  {
    icon: <CircleStackIcon />,
    title: 'Decentralized Systems',
    description: 'Diving deep into the theory and practical applications of cryptocurrencies, NFTs, and blockchain technology.'
  }
];

const Interests: React.FC = () => {
  return (
    <SectionWrapper id="interests" title="Current Explorations">
       <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {interestsData.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Interests;