import React, { useState } from 'react';
import './NewPosts.scss';

const cardData = [
  {
    category: 'TECHNOLOGY',
    title: 'Digital Transformation',
    description: 'Leveraging cutting-edge AI and cloud computing to drive global digital transformation.',
    image: 'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/open-props-v2-adaptive-cards/images/img-1.avif'
  },
  {
    category: 'TECH INDUSTRY',
    title: 'Innovating Work Environments',
    description: 'Discover how our technologies create modern workspaces, enhancing productivity, and fostering collaboration.',
    image: 'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/open-props-v2-adaptive-cards/images/img-2.avif'
  },
  {
    category: 'TECH INFRASTRUCTURE',
    title: 'Streamlining Operations',
    description: 'Optimize operations with our tech infrastructure solutions, ensuring seamless performance and reliability.',
    image: 'https://raw.githubusercontent.com/mobalti/open-props-interfaces/main/open-props-v2-adaptive-cards/images/img-3.avif'
  }
];

export default function NewPosts() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <button onClick={toggleTheme} className="theme-toggle-btn">Toggle Theme</button>
      
      {['dark', 'light'].map((theme, idx) => (
        <section key={idx} className={`section ${theme}`}>
          <ul className="card-list">
            {cardData.map(({ category, title, description, image }, index) => (
              <li key={index}>
                <div className="card">
                  <div className="visual">
                    <img className="card-image" src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="meta">
                      <div className="card-header">
                        <div className="category">{category}</div>
                        <h3 className="title">{title}</h3>
                      </div>
                      <p className="desc">{description}</p>
                    </div>
                    <div className="controls">
                      <a href="#" className="button-link primary">
                        Learn More
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                          <path d="M13.1667 1.6665L16.5 4.99984M16.5 4.99984L13.1667 8.33317M16.5 4.99984L1.5 4.99984" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}