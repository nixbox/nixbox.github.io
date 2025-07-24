import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Card } from './Card';
import { WifiIcon, BluetoothIcon, CpuChipIcon, CubeTransparentIcon } from '../constants';

const expertiseData = [
  {
    icon: <BluetoothIcon />,
    title: 'Wi-Fi & Bluetooth',
    description: 'Extensive experience in developing and optimizing wireless solutions for consumer electronics like Google Glass and Pixel Buds.'
  },
  {
    icon: <CpuChipIcon />,
    title: 'Embedded Systems',
    description: 'Skilled in low-level systems programming and hardware interaction, crucial for performance-critical consumer devices.'
  },
  {
    icon: <CubeTransparentIcon />,
    title: 'Android Platform',
    description: 'Deep expertise in the Android Bluetooth stack and systems-level development from my time on the core Android team.'
  },
  {
    icon: <WifiIcon />,
    title: 'Consumer Electronics',
    description: 'Contributed to pioneering products like Google Glass and Pixel Buds, focusing on their core connectivity and software features.'
  }
];

const Expertise: React.FC = () => {
  return (
    <SectionWrapper id="expertise" title="Technical Expertise">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {expertiseData.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Expertise;