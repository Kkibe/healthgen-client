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
            <p className="about-me">
                User Interface Designer and <br /> fron-end developer
            </p>
        </div>
    );
}

export default Profile;
