import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Protect Your Sanctuary with Smart Home Security
            </h1>
            <p className="hero-subtitle">
              Our device monitoring and alert system provides real-time protection, 
              intelligent automation, and peace of mind for your home.
            </p>
            <button className="btn-primary hero-cta">
              Get Started Now
            </button>
          </div>
          <div className="hero-video">
            <video 
              className="hero-video-player"
              autoPlay 
              muted 
              loop 
              playsInline
            >
              <source src="/assets/protection2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
