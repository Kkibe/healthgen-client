import React, { useContext } from 'react';
import { Outlet, NavLink} from "react-router-dom";
import { UserContext } from '../../UserContext';
import Holder from '../../assets/image7.png';
import './Navbar.scss';


const Navbar = () => {
    const {user} = useContext(UserContext);
    
    const handleClick = () => {
        let element = document.querySelector('.dropdown');
        element.classList.toggle("active"); 
    }
    return ( 
        <div className='navbar'>
            <a href="/" className="brand" title='healthgen'>
              Healthgen<span className="highlight">.</span>
            </a>
            <nav>
                <NavLink to='/' title='healthgen' end state={{ history: "/" }}>Home</NavLink>
                <NavLink to='/books' title='books' state={{ history: "books" }}>Books</NavLink>
                <NavLink to='/posts' title='posts' state={{ history: "posts" }}>Posts</NavLink>
                <NavLink to='/about' title='about' end state={{ history: "about" }}>About</NavLink>
            </nav>
            {   user && <img className="user-avatar" src={ user.image ? user.image : Holder} alt="avatar" onClick={handleClick} title='open dropdown'/>}
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
