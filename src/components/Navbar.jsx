import React, { useContext } from 'react';
import { Outlet, NavLink} from "react-router-dom";
import { UserContext } from '../UserContext';
import Icon from '../assets/logo.png';

const Navbar = () => {
    const {user} = useContext(UserContext);
    document.addEventListener('click', (e) => {      
        let element = document.querySelector('.dropdown');
        const classes = e.target.classList;
        if(classes.contains('avatar')) {
            if(element.style.display === 'flex') {
                return element.style.display = 'none'
            } else {
                return element.style.display = 'flex'
            }
        } else if(classes.contains('dropdown')) {
           return element.style.display = 'none'
        } 
    })
    return (
        <div className='navbar'>
            <a href="/" className="logo" title='healthgen'>
                <img src={Icon} alt="healthgen-icon" />
            </a>
            <nav>
                <NavLink to='/' className="link" title='healthgen' style={({ isActive }) => {return {color: isActive ? "#ffff" : "",background: isActive ? "#1253a3" : ""};}}>Home</NavLink>
                <NavLink to='/books' className="link" title='books' style={({ isActive }) => {return {color: isActive ? "#ffff" : "",background: isActive ? "#1253a3" : ""};}}>Books</NavLink>
                <NavLink to='/posts' className="link" title='posts' style={({ isActive }) => {return {color: isActive ? "#ffff" : "",background: isActive ? "#1253a3" : ""};}}>Posts</NavLink>
                <NavLink to='/write' className="link" title='write' style={({ isActive }) => {return {color: isActive ? "#ffff" : "",background: isActive ? "#1253a3" : ""};}}>Write</NavLink>
                <NavLink to='/about' className="link" title='about' style={({ isActive }) => {return {color: isActive ? "#ffff" : "",background: isActive ? "#1253a3" : ""};}}>About</NavLink>
                <NavLink to='/contact' className="link" title='contact' style={({ isActive }) => {return {color: isActive ? "#ffff" : "",background: isActive ? "#1253a3" : ""};}}>Contact</NavLink>
            </nav>
            {   user && 
                    <img className="user-avatar" src={ 
                        user.img ? user.img : Icon
                        } alt="avatar" />
            }
            {
                !user &&
                <div className="button-group">
                  <a href='/register' title='register'>Register</a>
                  <a href='/login' title='login'>Login</a>
                </div>
            }
            <Outlet />
        </div>
    );
}

export default Navbar;
