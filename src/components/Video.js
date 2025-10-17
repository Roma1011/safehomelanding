import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <section id="video" className="video-section">
      <div className="container">
        <h2 className="section-title">See Safe Home in Action</h2>
        <div className="video-container">
          <video 
            className="main-video"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/assets/mainsafehomevideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-description">
          <p>Watch how Safe Home transforms your living space into a secure, intelligent environment with real-time monitoring and smart automation.</p>
        </div>
      </div>
    </section>
  );
};

export default Video;

