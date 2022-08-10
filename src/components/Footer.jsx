import React from 'react';
import "./footer.css"
import logo from "../assets/RT logo.png"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__container">
                <div className="row">
                    <div className="footer__items">
                        <img src={logo} alt="" />
                        <p>Copyright &copy; 2022 Rayson Thow</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
