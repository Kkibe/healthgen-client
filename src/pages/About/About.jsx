import React, { useEffect } from 'react';
import Icon from '../../assets/logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="about-us">
                <img src={Icon} className='profile-image' title='healthgen-icon'/>
                <div className="info">
                    <h1>About Us</h1>
                    <p>Welcome to our vibrant online platform, your one-stop destination for books and blogs! Whether you’re a passionate reader, an aspiring writer, or simply someone who loves exploring fresh ideas, our website has something special for everyone.</p>
                    <h1>For Book Enthusiasts</h1>
                    <p>Discover a rich library of books spanning various genres, topics, and interests. Whether you prefer fiction, non-fiction, self-help, or academic resources, our collection is curated to cater to diverse tastes. What’s more, we empower our users to contribute to the library by posting their own books for others to enjoy. You can also download books to read offline or enjoy them directly on our platform with our seamless online reading experience.</p>
                    <h1>For Blog Writers and Readers</h1>
                    <p>Our blogging section is a haven for creative expression and meaningful conversations. Write and share your own articles to engage with an active community of readers, or browse blogs across a wide array of topics that spark curiosity and inspire learning. From personal stories to expert insights, our blogs are crafted to entertain, inform, and educate.</p>
                    <h1>Stay Updated with Our Newsletters</h1>
                    <p>We believe in keeping our community informed and connected. Subscribe to our newsletters to receive updates on the latest books, trending blogs, community events, and special features. Stay ahead of the curve with curated content delivered straight to your inbox.</p>
                    <h1>Our Mission</h1>
                    <p>We aim to create a thriving community where knowledge is shared freely, creativity is celebrated, and readers and writers come together to inspire one another.
                        Join us today and be part of a growing community that values the power of words and ideas. Let’s explore, learn, and create together!</p>
                    <ul>
                        <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/ancientpupy" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/ancientpupy/" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
                        <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
                    </ul>
                    <div className="links">
                        <NavLink to="/contact" title='contact'>Contact Us</NavLink>
                        <a href="#subscribe" title='newsletter'>Newsletter</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
