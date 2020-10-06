import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">Professional Development Center</div>
            <div className="nav-items">
                <ul className="nav-list">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/profile">
                        <li>Profile</li>
                    </Link>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar
