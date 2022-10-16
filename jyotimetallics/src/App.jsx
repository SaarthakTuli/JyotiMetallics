import React from "react";
import
{
    Switch,
    Route
} from 'react-router-dom';

import { Routes } from "react-router";


import Home from './HomePage/Home'
import About from './About/About'; 
import Products from './Products/Products';
import Contact from './Contact/Contact';

import './index.css'

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
                <Route path="contact" element={<Contact />} />
        </Routes>
    </div>
    );
}

export default App;