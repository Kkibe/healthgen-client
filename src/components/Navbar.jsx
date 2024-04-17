import React, { useContext } from 'react';
import { Outlet, NavLink} from "react-router-dom";
import { UserContext } from '../UserContext';
import Icon from '../assets/logo.png';
import Holder from '../assets/image7.png';

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
                <NavLink to='/' title='healthgen' end state={{ history: "/" }}>Home</NavLink>
                <NavLink to='/books' title='books' end state={{ history: "books" }}>Books</NavLink>
                <NavLink to='/posts' title='posts' end state={{ history: "posts" }}>Posts</NavLink>
                <NavLink to='/write' title='write' end state={{ history: "write" }}>Write</NavLink>
                <NavLink to='/about' title='about' end state={{ history: "about" }}>About</NavLink>
                <NavLink to='/contact' title='contact' end state={{ history: "contact" }}>Contact</NavLink>
            </nav>
            {   user && <img className="user-avatar" src={ user.img ? user.img : Holder} alt="avatar" />}
            {
                !user &&
                <div className="button-group">
                  <NavLink to='/get-started' title='register'>Register</NavLink>
                  <NavLink to='/login' title='login'>Login</NavLink>
                </div>
            }
            <Outlet />
        </div>
    );
}

export default Navbar;
