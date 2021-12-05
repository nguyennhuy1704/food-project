import React from 'react';
import { Image, Input } from 'antd';
import logo from '../../utils/img/logo.png';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { MenuHeader } from './config.js';

const Header = (props) => {
    const location = useLocation();
    console.log('🚀 ~ file: Header.js ~ line 10 ~ Header ~ location', location);

    const { pathname } = location;

    return (
        <div className="header">
            <div className="logo">
                <Image width={250} src={logo} />
            </div>
            <ul className="nav_menu">
                {MenuHeader.map((item, index) => (
                    <li key={index} className={`nav_menu-item ${pathname === item.link ? 'active' : ''}`}>
                        <Link to={item.link}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Header;
