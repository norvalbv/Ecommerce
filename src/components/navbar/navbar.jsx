import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="left">
                <input placeholder="search" />
            </div>
            <div className="middle">
                <h1>ECOMMERCE.</h1>
            </div>
            <div className="right">
                {/* <Link></Link> */}
            </div>
        </div>
    )
}
