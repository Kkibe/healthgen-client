import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const user = useSelector((state) => state.user.currentUser);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        user && setIsAdmin(user.others.isAdmin)
    }, [user])
    return (
        <div className='footer'>
            <div className="wrapper">
                <section>
                    <h3>Home</h3>
                    <div className="container">
                        <a href="/#subscribe" className='link' title='subscribe'>Get News</a>
                        <a href="/write" className='link' title='write'>Write a post</a>
                        <a href="/profile" className='link' title='profile'>Account Profile</a>
                        <a href="/contact" className='link' title='feedback'>Give Feedback</a>
                        
                    </div>
                </section>
                <section>
                    <h3>Useful Links</h3>
                    <div className="container">
                        <a href="/about" className='link' title='about'>About Healthgen</a>
                        <a href="/write" className='link' title='support'>Support</a>
                        <a href="/" className='link' title='privacy'>Privacy at Healthgen</a>
                        <a href="/about" className='link' title='terms'>Terms of use</a>
                    </div>
                </section>
                <section>
                    <h3>Healthgen</h3>
                    <div className="container">
                        <a href="/" className='link' title='healthgen'>Home</a>
                        <a href="/books" className='link' title='books'>Books</a>
                        <a href="/posts" className='link' title='blogs'>Read Blogs</a>
                        <a href="/contact" className='link' title='contact'>Contact Us</a>
                        {
                            isAdmin && <a href="/upload" className='link' title='contact'>Upload Book</a>
                        }
                    </div>
                </section>
            </div>
            <div className="bottom">
                <span>&copy; healthgen 2022</span>
                <div className="container">
                    <span>Follow us:</span>
                    <a href="https://www.facebook.com/kibetkorirc" className='facebook' target='_blank' title='facebook'><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/ancientpupy" className='twitter' target='_blank' title='twitter'><i className="fa fa-twitter"></i></a>
                    <a href="https://www.instagram.com/ancientpupy/" className='instagram' target='_blank' title='instagram'><i className="fa fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@codespear" className='youtube' target='_blank' title='youtube'><i className="fa fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/in/kibetkorir" className='linkedin' target='_blank' title='linkedin'><i className="fa fa-linkedin"></i></a>
                </div>
                <a href="/about" title='faq'>FAQ</a>
                <a href="/about" title='privacy'>Privacy & Cookies</a>
            </div>
        </div>
    );
}

export default Footer;
