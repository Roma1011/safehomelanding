import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img src="/assets/protection.png" alt="Safe Home Logo" width="32" height="32" />
            </div>
            <span className="logo-text">Safe Home</span>
          </div>
          <nav className="nav">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#video" className="nav-link">Video</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#footer" className="nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
