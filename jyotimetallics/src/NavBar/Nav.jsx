import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Nav.css"


function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            handleShow(true);
        }
        else handleShow(false);
        });

        return () => {
        window.removeEventListener("scroll");
        };
    }, []);
    
    return (
        <>
            <div className={ `nav ${show && `nav__black`}`}>
            <h1 className='nav__logo'>JM</h1>
            
            <ul className='nav__links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About Us</Link></li>
                <li><Link to="products">Products</Link></li>
                <li><Link to="contact">Contact Us</Link></li>
            </ul>
            </div>
            
        </>
        
    );
}

export default Nav