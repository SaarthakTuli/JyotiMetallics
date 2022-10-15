import React from "react";
import
{
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';


import Home from './HomePage/Home'
import About from './About/About'; 
import Products from './Products/Products';
import Contact from './Contact/Contact';

import './index.css'

function App() {
    return (
        <Router>
            <Switch>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Switch>
        </Router>
    );
}

export default App;