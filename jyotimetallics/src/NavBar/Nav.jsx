import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import "./Nav.css"

import Logo from '../assets/logo.png';


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
            window.removeEventListener("scroll", () => { });
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    

    return (
        <> 
            <div className={ `nav ${show && `nav__black`} ${isOpen && `bg__color`}`}>
                <img
                    src={Logo}
                    alt="logo"
                />
            
                <ul className={`nav__links nav__toggle ${isOpen && `Open`}`}>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    </li>
                </ul>
                
                <div className={`nav__icon `}>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
                
            </div>
            
        </>
        
    );
}

export default Nav