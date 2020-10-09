import React from 'react'
import {Link} from 'react-router-dom';
import '../App.css';
import logo from '../images/ucsc_logo_trans.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"><img src={logo} alt = "logo" style={{ height:'40px' , width:'40px' , borderRadius:'5px' }}></img>Professional Development Center</div>
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
