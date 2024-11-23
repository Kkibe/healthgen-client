import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { NavLink } from 'react-router-dom';
import './Dropdown.scss';

const Dropdown = () => {
    const {user, setUser} = useContext(UserContext);
    const handleLogout = () => {
        setUser(null);
    }
    return (
        <div className='dropdown'>
            <div className="top">
                <button type='button' title='lightmode'><i className="fa fa-sun"></i> Light</button>
                <button type='button' title='darkmode'><i className="fa fa-moon"></i> Dark</button>
            </div>
            <hr />
            <div className="wrapper">
            <NavLink to='/profile' title='home' end state={{ history: "about" }}><i className="fa fa-user"></i> <span>Profile</span></NavLink>
            <NavLink to='/write' title='write' end state={{ history: "write" }}><i className="fa fa-pen-nib"></i> <span>Write Article</span></NavLink>
            <NavLink to='/upload' title='upload' end state={{ history: "upload" }}><i className="fa fa-pen-nib"></i> <span>Upload A Book</span></NavLink>
            <NavLink to='/contact' title='contact' end state={{ history: "contact" }}><i className="fa fa-phone"></i> <span>Contact</span></NavLink>
            {/*<NavLink to='/settings' title='settings' ><i className="fa fa-gear"></i> <span>Settings</span></NavLink>*/}
            </div>
            {user && <button onClick={handleLogout} title="logout" type='button'>Logout <i className="fa fa-power-off"></i></button>}
        </div>
    );
}

export default Dropdown;
