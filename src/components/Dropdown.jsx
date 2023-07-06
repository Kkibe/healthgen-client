import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { NavLink } from 'react-router-dom';

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
            <NavLink to='/profile' title='home' className='link' style={({ isActive }) => {return {background: isActive ? "#b9e7e7" : ""};}}><i className="fa fa-user"></i> <span>Profile</span></NavLink>
            <NavLink to='/write' title='write' className='link' style={({ isActive }) => {return {background: isActive ? "#b9e7e7" : ""};}}><i className="fa fa-pen-nib"></i> <span>Write</span></NavLink>
            <NavLink to='/about' title='about' className='link' style={({ isActive }) => {return {background: isActive ? "#b9e7e7" : ""};}}><i className="fa fa-info"></i> <span>About</span> </NavLink>
            {/*<NavLink to='/settings' title='settings' className='link' style={({ isActive }) => {return {background: isActive ? "#b9e7e7" : ""};}}><i className="fa fa-gear"></i> <span>Settings</span></NavLink>*/}
            </div>
            {<button onClick={handleLogout} title="logout" type='button'>Logout <i className="fa fa-power-off"></i></button>}
        </div>
    );
}

export default Dropdown;
