import React, { useContext } from 'react';
import Image from '../assets/img.jpeg';
import { UserContext } from '../UserContext';

const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        <div className='profile'>
            <div className="cover-photo">
                <img src={Image} alt="" className='profile-image' crossOrigin="anonymous"/>
            </div>
            <div className="profile-name">{user && user.username}</div>
            <h3>{user && user.email}</h3>
            <p className="about">
                User Interface Designer and <br /> fron-end developer
            </p>

            <div className="btn-container">
                <button className="msg-btn" type='button'>Message</button>
                <button className="follow-btn" type='button'>Follow</button>
            </div>

            <div className='social-links'>
                <a href="#" className='facebook' title='facebook'><i className="fa fa-facebook"></i></a>
                <a href="#" className='twitter' title='twitter'><i className="fa fa-twitter"></i></a>
                <a href="#" className='instagram' title='instagram'><i className="fa fa-instagram"></i></a>
                <a href="#" className='youtube' title='youtube'><i className="fa fa-youtube"></i></a>
                <a href="#" className='linkedin' title='linkedin'><i className="fa fa-linkedin"></i></a>
            </div>
            
        </div>
    );
}

export default Profile;