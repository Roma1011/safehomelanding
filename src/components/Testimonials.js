import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="coming-soon-container">
          <div className="coming-soon-content">
            <div className="coming-soon-icon">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="coming-soon-title">Coming Soon</h3>
            <p className="coming-soon-description">
              We're collecting authentic customer testimonials to share their real experiences with Safe Home. 
              Check back soon to read genuine reviews from our satisfied customers.
            </p>
            <div className="coming-soon-badge">
              <span>Stay Tuned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
