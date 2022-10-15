import React, { useState, useEffect } from 'react'
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
        <div className={ `nav ${show && `nav__black`}`}>
            <h1 className='nav__logo'>JM</h1>

            <ul className='nav__links'>
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Products</a></li>
                <li><a>Contact Us</a></li>
            </ul>
          
        </div>
    );
}

export default Nav