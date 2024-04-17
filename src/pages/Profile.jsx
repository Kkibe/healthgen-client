import React, { useContext } from 'react';
import Image from '../assets/img.jpeg';
import Holder from '../assets/image7.png';
import { UserContext } from '../UserContext';

const Profile = () => {
    const {user, setUser} = useContext(UserContext);
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div className='profile'>
            <div className="cover-photo">
                <img src={user.img ? user.img : Holder} alt="" className='profile-image' crossOrigin="anonymous"/>
            </div>
            <h3 className="profile-name">Username: {user && user.username}</h3>
            <h3>Email: {user && user.email}</h3>
            <h3>Member since: {new Date(user.createdAt).toDateString()}</h3>
            <p className="about-me">
                User Interface Designer and <br /> fron-end developer
            </p>
            <p className="description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At suscipit doloremque dolor optio impedit excepturi doloribus quaerat, perspiciatis, aut corporis tempore soluta obcaecati quisquam inventore officia neque eum quod ducimus.
            </p>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}

export default Profile;
