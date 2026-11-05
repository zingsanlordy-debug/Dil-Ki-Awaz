import React, { useEffect, useRef } from 'react';

/**
 * Top Adsterra Banner 320x50 for Diwali Section
 * Safe iframe with lazy loading
 */
export const DiwaliTopBanner320x50: React.FC = () => {
  return (
    <div className="w-full my-5 flex flex-col items-center justify-center">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 select-none">
        Advertisement
      </span>
      <div className="w-[320px] h-[50px] flex items-center justify-center overflow-hidden bg-white/70 border border-[#ffe4e8] rounded-xl shadow-2xs">
        <iframe
          title="Advertisement"
          width="320"
          height="50"
          loading="lazy"
          scrolling="no"
          style={{ border: 'none', overflow: 'hidden', width: '320px', height: '50px' }}
          srcDoc={`<!DOCTYPE html><html><head><base target="_blank"><style>body{margin:0;padding:0;overflow:hidden;background:transparent;display:flex;justify-content:center;align-items:center;}</style></head><body><script type="text/javascript">atOptions = {'key' : '24552544e4e324115db30643c73587fe','format' : 'iframe','height' : 50,'width' : 320,'params' : {}};</script><script type="text/javascript" src="https://bicea.org/22/24552544e4e324115db30643c73587fe"></script></body></html>`}
        />
      </div>
    </div>
  );
};

/**
 * Middle Adsterra Native Banner for Diwali Section
 * Placed in the middle of Diwali Shayari cards
 */
export const DiwaliMiddleNativeBanner: React.FC = () => {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    const scriptId = 'adsterra-native-7044c10fe6ce8253d1af096d8d9ef180';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = 'https://bicea.org/21/7044c10fe6ce8253d1af096d8d9ef180';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="col-span-full w-full my-6 flex flex-col items-center justify-center p-4 rounded-3xl bg-gradient-to-r from-[#fff8f9] via-white to-[#fff8f9] border border-[#ffd6df] shadow-2xs">
      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 select-none">
        Advertisement
      </span>
      <div
        id="container-7044c10fe6ce8253d1af096d8d9ef180"
        className="w-full flex justify-center items-center min-h-[90px]"
      />
    </div>
  );
};
