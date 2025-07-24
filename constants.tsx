
import React from 'react';

// Generic Icon Props
interface IconProps {
  className?: string;
}

// Expertise Icons
export const WifiIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856a9.75 9.75 0 0113.788 0M12 18.382a2.625 2.625 0 010-5.25 2.625 2.625 0 010 5.25z" />
  </svg>
);

export const BluetoothIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 6.75 10.5 10.5-4.125-4.125L6.75 6.75zm0 10.5 10.5-10.5-4.125 4.125L6.75 17.25z" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 1A2.25 2.25 0 001.5 3.25v1.5A2.25 2.25 0 003.75 7h1.5a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 003.75 1h-1.5zM15 1.5a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zM17.25 18.75a.75.75 0 100 1.5.75.75 0 000-1.5zM19.5 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM4.5 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 4.5a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3A.75.75 0 0012 4.5zM12 15a.75.75 0 00-.75.75v3a.75.75 0 001.5 0v-3a.75.75 0 00-.75-.75zM8.25 18.75a.75.75 0 100 1.5.75.75 0 000-1.5zM3.75 17h1.5a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 003.75 11h-1.5A2.25 2.25 0 001.5 13.25v1.5A2.25 2.25 0 003.75 17zM17.25 11h1.5a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-2.25 2.25h-1.5a2.25 2.25 0 01-2.25-2.25v-1.5A2.25 2.25 0 0117.25 11zM11 17.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0z" />
  </svg>
);

export const CubeTransparentIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25-9 5.25m18 0-9 5.25m9-5.25v9l-9 5.25m0-9v9l-9-5.25m9 5.25-9-5.25" />
    </svg>
);


// Experience Icons
export const GoogleIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.28,5 12.19,5C14.76,5 16.1,6.16 17.1,7.22L19.34,5.16C17.22,3.31 15.06,2 12.19,2C6.92,2 2.71,6.62 2.71,12C2.71,17.38 6.92,22 12.19,22C17.6,22 21.54,18.33 21.54,12.23C21.54,11.76 21.48,11.43 21.35,11.1Z" />
  </svg>
);

// Interests / Explorations Icons
export const GlobeAltIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 01-9-9 9 9 0 019-9m9 9a9 9 0 01-9 9m9-9h-9m9 0a9 9 0 01-9-9" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const ScaleIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-3 3m3-3l3 3m-3 12h.01M12 6.75h.01M12 11.25h.01m-3 3h6M6 18h12a2.25 2.25 0 002.25-2.25V8.25A2.25 2.25 0 0018 6H6a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 006 18z" />
  </svg>
);

export const BookOpenIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l15.482 0m-15.482 0a60.437 60.437 0 01-1.492 4.41C2.867 15.632 2.5 17.25 2.5 19.5c0 1.25.333 2.45 1.002 3.5h17.002c.67-1.05.998-2.25.998-3.5 0-2.25-.367-3.868-1.258-5.25a60.437 60.437 0 01-1.492-4.412" />
  </svg>
);

export const CircleStackIcon: React.FC<IconProps> = ({ className = "w-12 h-12" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
);
