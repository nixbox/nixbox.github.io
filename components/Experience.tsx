import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { GoogleIcon } from '../constants';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Professional Journey">
      <div className="max-w-3xl mx-auto bg-slate-800 rounded-lg shadow-2xl overflow-hidden p-8 md:flex items-center gap-8">
        <div className="text-cyan-400 flex-shrink-0 mb-6 md:mb-0">
          <GoogleIcon className="w-24 h-24 mx-auto" />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-white">Software Engineer</h3>
          <p className="text-xl text-slate-400 mb-4">Google (10+ Years)</p>
          <p className="mb-4">
            During my decade-plus at Google, I had the privilege of working on several high-impact teams at the forefront of consumer technology and mobile platforms.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li><span className="font-semibold text-white">Google Glass Team:</span> Contributed to the foundational software, focusing primarily on Wi-Fi connectivity.</li>
            <li><span className="font-semibold text-white">Pixel Buds Team:</span> Focused on delivering seamless audio and connectivity experiences through Bluetooth.</li>
            <li><span className="font-semibold text-white">Android Bluetooth Team:</span> Worked on the core OS and initiated the transition of the Android Bluetooth stack from its C++ codebase to Rust for improved safety and performance.</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;