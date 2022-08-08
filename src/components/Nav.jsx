import React from 'react';
import "./nav.css"
import Logo from "../assets/RT logo.png"
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    return (
        
        <nav className='nav'>
            <div className="container">
                <div className="row">
                    <div className="nav__wrapper">
                        <img src = {Logo} alt="logo"/>
                            <div className='nav__wrapper--links'>
                                <Link className="link" to="/">Home</Link>
                                <HashLink className="link" to="#About" smooth>About</HashLink>
                                <HashLink className="link" to="#SearchPage" smooth>Search</HashLink>
                            </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav;
