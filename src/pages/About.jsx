import React from 'react';
import Icon from '../assets/logo.png';

const About = () => {
    return (
        <div className="about">
            <div className="about-us">
                <img src={Icon} className='profile-image' title='healthgen-icon'/>
                <div className="info">
                    <h1> Welcome to<a href="/" title='healthgen'>Healthgen</a> </h1>
                    <p>Welcome all to healthgen. Here you will be able to read and write posts and read books related to healthcare. Feel free to ask any question in the contact page and don't forget to subscribe to our newsletter.</p>
                    <ul>
                        <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/ancientpupy" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/ancientpupy/" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
                    </ul>
                    <div className="links">
                        <a href="/contact" title='contact'>Contact Us</a>
                        <a href="/#subscribe" title='newsletter'>Newsletter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
