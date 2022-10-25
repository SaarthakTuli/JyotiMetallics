import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import DropDown from './DropDown'
import { Link } from 'react-router-dom';
import "./Nav.css"

import Logo from '../assets/logo.png';

import '../Details.js'


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

    const [isDrop, setIsDrop] = useState(false);

    

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
                        <Link to="/documents" onClick={() => setIsOpen(false)}>Documents</Link>
                    </li>
                    <li>
                        <h1 className='products' onClick={() => setIsDrop(!isDrop) }>Products</h1>
                        <div className={`products__nav ${isDrop ? `active` : `inactive`}`}>
                    {
                        details.map((product) => {
                            const { id, name, description, image } = product;
                            
                            return (
                                <h1
                                    key={id}
                                    className='products__links'
                                    onClick={() => {
                                        setIsOpen(false);
                                        setIsDrop(!isDrop);
                                    }}>{name}
                                </h1>
                            );
                        })
                    }
                </div>
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