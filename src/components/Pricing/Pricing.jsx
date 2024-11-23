import React from 'react';
import './Pricing.scss';

const Pricing = () => {
  return (
    <div className="price-sec-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="main-heading">PRICING TABLE</div>
          </div>
        </div>
        <div className="row">
          {/* Basic Plan */}
          <div className="col-lg-4">
            <div className="price-box">
              <div>
                <div className="price-label basic">Basic Plan</div>
                <div className="price">$ 5.99</div>
                <div className="price-info">Per Month, Incl GST.</div>
              </div>
              <div className="info">
                <ul>
                  <li><i className="fas fa-check"></i>5k Searchable messages</li>
                  <li><i className="fas fa-check"></i>10 custom Apps/services</li>
                  <li><i className="fas fa-check"></i>Minimum 3 users, max 10 users</li>
                  <li><i className="fas fa-check"></i>1 Voice and video call</li>
                </ul>
                <a href="#" className="plan-btn">Join Basic Plan</a>
              </div>
            </div>
          </div>

          {/* Value Plan */}
          <div className="col-lg-4">
            <div className="price-box">
              <div>
                <div className="price-label value">Value Plan</div>
                <div className="price">$ 10.99</div>
                <div className="price-info">Per Month, Incl GST.</div>
              </div>
              <div className="info">
                <ul>
                  <li><i className="fas fa-check"></i>5k Searchable messages</li>
                  <li><i className="fas fa-check"></i>10 custom Apps/services</li>
                  <li><i className="fas fa-check"></i>Minimum 3 users, max 10 users</li>
                  <li><i className="fas fa-check"></i>1 Voice and video call</li>
                </ul>
                <a href="#" className="plan-btn">Join Value Plan</a>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="col-lg-4">
            <div className="price-box">
              <div>
                <div className="price-label premium">Premium Plan</div>
                <div className="price">$ 15.99</div>
                <div className="price-info">Per Month, Incl GST.</div>
              </div>
              <div className="info">
                <ul>
                  <li><i className="fas fa-check"></i>5k Searchable messages</li>
                  <li><i className="fas fa-check"></i>10 custom Apps/services</li>
                  <li><i className="fas fa-check"></i>Minimum 3 users, max 10 users</li>
                  <li><i className="fas fa-check"></i>1 Voice and video call</li>
                </ul>
                <a href="#" className="plan-btn">Join Premium Plan</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>
          Get free icon packs for your next project at{' '}
          <a href="http://iiicons.in/" target="_blank" rel="noopener noreferrer" className="footer-link">
            www.iiicons.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Pricing;
