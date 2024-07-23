import React, { useEffect } from 'react'
import Particle from './ParticleFeatures/Particle';

export default function HomepageFeatures() {
  useEffect(() => {
    const loadReplainJS = () => {      
      const script = document.createElement('script');      
      script.src = './replain.js';
      script.onload = () => initializeParticlesJS();
      document.body.appendChild(script);
    };

    loadReplainJS();
  },[])
  return (
    <React.Fragment>
      <Particle/>
    </React.Fragment>
  )
}
