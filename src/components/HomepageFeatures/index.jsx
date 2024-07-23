import React, { useEffect } from 'react';
import Particle from './ParticleFeatures/Particle';

export default function HomepageFeatures() {
  useEffect(() => {
    const loadReplainJS = () => {
      const script = document.createElement('script');
      script.src = './replain.js';
      script.onload = () => {
        console.log('replain.js loaded');
        initializeParticlesJS();
      };
      document.body.appendChild(script);
    };

    loadReplainJS();

    // Cleanup script when component unmounts
    return () => {
      const scripts = document.querySelectorAll('script[src="./replain.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <React.Fragment>
      <Particle />
    </React.Fragment>
  );
}
