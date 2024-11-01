import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Nav Bar</h2>

            <nav className='link-box'>
                <Link className='link-box' to='/'>Home</Link>

                <NavLink className={'link-box'} to = {'/users'}>Users</NavLink>
                <NavLink className='link-box' to='/posts'>Posts</NavLink>

                <Link className='link-box' to="/about">About</Link>
                <Link className='link-box' to="/contact">Contact</Link>
                {/* <Link className='link-box' to="/users">Users</Link> */}
                {/* <Link className='link-box' to='/posts'>Posts</Link> */}
            </nav>
        </div>
    );
};

export default Header;