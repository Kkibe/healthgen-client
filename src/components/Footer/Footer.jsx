import React from 'react';
import './Footer.scss';


const Footer = ({user}) => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <section>
                    <h3>Home</h3>
                    <div className="container">
                        <a href="#subscribe" title='subscribe'>Get News</a>
                        <a href="/write" title='write'>Write a post</a>
                        <a href="/profile" title='profile'>Account Profile</a>
                        <a href="/contact" title='feedback'>Give Feedback</a>
                        
                    </div>
                </section>
                <section>
                    <h3>Useful Links</h3>
                    <div className="container">
                        <a href="/about" title='about healthgen'>About Healthgen</a>
                        <a href="/contact" title='support'>Support & Contact</a>
                        <a href="/about" title='privacy'>Privacy at Healthgen</a>
                        <a href="/about" title='terms'>Terms of use</a>
                    </div>
                </section>
                <section>
                    <h3>Healthgen</h3>
                    <div className="container">
                        <a href="/" title='healthgen'>Home</a>
                        <a href="/books" title='books'>Books</a>
                        <a href="/posts" title='blog posts'>Read Blogs</a>
                        <a href="/contact" title='contact'>Contact Us</a>
                        {
                            (user && user.isAdmin) && <a href="/upload" title='contact'>Upload Book</a>
                        }
                    </div>
                </section>
            </div>
            <div className="bottom">
                <span>&copy; healthgen 2022</span>
                <div className="container">
                    <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/ancientpupy" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/ancientpupy/" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
                </div>
                <a href="/about" title='faq'>FAQ</a>
                <a href="/about" title='privacy & cookies'>Privacy & Cookies</a>
            </div>
        </div>
    );
}

export default Footer;
