import React from 'react';
import { SectionWrapper } from './SectionWrapper';

const About: React.FC = () => {
  const imageUrl = 'https://lh3.googleusercontent.com/pw/AP1GczMvSFZ-Ty9h5IdKIIp7rm7aK3dhOURAS7pMDhqKQnUwCfAYaeWw8mo3bHaoeclg1DyeHxeOJpL9_2pk8FuvGlc3kjZDX3qmK4yciw1ESFp2cy2AQS5InF-XHOn4njtbEutFWUU6xLsCIweoX4Q0M6l-Jg=w679-h745-s-no-gm';

  return (
    <SectionWrapper id="about" title="About Me">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-16">
        {/* Image Column */}
        <div className="md:w-1/3 flex-shrink-0">
          <div className="relative group w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0.5 rounded-full bg-gradient-to-br from-cyan-500 to-slate-700 transform transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" aria-hidden="true"></div>
            <img
              src={imageUrl}
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-900"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="md:w-2/3 text-center md:text-left">
          <div className="space-y-6 text-lg text-slate-300">
            <p>
              I'm a software engineer with more than a decade of experience at Google, where I had the privilege of working on pioneering products. My career has been a journey through the stack, from contributing to the Wi-Fi systems of Google Glass to the Bluetooth experience on Pixel Buds. On the Android Bluetooth team, I helped start the challenging but rewarding transition from a legacy C++ codebase to the safety and performance of Rust.
            </p>
            <p>
              My professional work is fueled by a deep, personal curiosity. I've spent countless hours diving into the Linux kernel just to understand how networking stacks like TCP/IP are truly implemented. This desire to understand complex systems from first principles extends beyond technology.
            </p>
            <p>
              I'm fascinated by how the global economy works, the history of money, and the emergence of new paradigms like cryptocurrencies and NFTs. For me, learning isn't a passive activity. I learn by doing—whether that means participating in financial markets or building software to solve a personal problem. These days, I'm actively experimenting with AI to accelerate both my learning and my ability to build.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;