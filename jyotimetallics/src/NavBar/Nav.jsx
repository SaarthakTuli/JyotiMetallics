import React, { useState, useEffect } from 'react'
import
{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import "./Nav.css"


import Home from '../HomePage/Home'
import About from '../About/About'; 
import Products from '../Products/Products';
import Contact from '../Contact/Contact';

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
            <Router>
            <ul className='nav__links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
        </Router>
           
          
        </div>
    );
}

export default Nav