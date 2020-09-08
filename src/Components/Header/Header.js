import React from 'react';
import logo from '../../image/logo.png';
import './Header.css'


const header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logo"/>
            <nav>
                <a href="/buy">All Courses</a>
                <a href="/review">Order </a>
                <a href="/manage">Upcoming Courses</a>
            </nav>
        </div>
    );
};

export default header;