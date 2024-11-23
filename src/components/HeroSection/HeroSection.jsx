import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="container">
          <header className="hero-header">
            <div className="hero-text">
              <h1>
                Find your <span className="highlight">greeny</span> stuff for your room
              </h1>
              <div className="underline"></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.
              </p>
              <button className="cta-btn">Learn More</button>
            </div>
          </header>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Leafs"
        />
      </div>
    </div>
  );
};

export default HeroSection;
