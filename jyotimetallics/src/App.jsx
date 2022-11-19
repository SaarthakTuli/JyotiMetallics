import React, { useState, useEffect } from "react";
import
{
    Routes,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import Nav from './NavBar/Nav'

import Home from './HomePage/Home'
import About from './About/About'; 
import Documents from "./Documents/Documents";
import Contact from './Contact/Contact';

import Whatsapp from './Whatsapp/Whatsapp';
import UPArrow from "./UpArrow/UPArrow";

import { ScatterBoxLoader } from "react-awesome-loaders";

import './index.css'
import GoToTop from "./GoToTop";


import Product from "./Products/Product";
import ScrollBar from "./ScrollBar/ScrollBar";

import Banner1 from './Banner/Banner1.jpg'
import Banner2 from "./Banner/AboutBanner.jpeg"
import Banner3 from './Banner/Banner2.jpg'
import Banner4 from "./Banner/Banner4.jpg"


function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => { 
            setLoading(false);
        }, 5000)
    }, []);

    return (
        <div className="App">
                
            <Router>
                {
                    loading ? 
                
                <div className="loading__screen">
                    <ScatterBoxLoader
                        primaryColor={"#6366F1"}
                        background={'#ffffff'}
                    />
                </div>
                    
                    :

                    <div>
                            <Nav />
                            
                            <ScrollBar />

                        <Routes>
                            <Route exact path="/" element={<Home Banner={Banner1} />} />
                            <Route exact path="/about" element={<About Banner={Banner2} />} />
                            <Route exact path="/documents" element={<Documents />} />
                            <Route exact path="/contact" element={<Contact Banner={Banner4} />} />
                                
                            <Route exact path="/products1" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products2" element={<Product Banner={Banner3} />} />
                             <Route exact path="/products3" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products4" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products5" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products6" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products7" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products8" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products9" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products10" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products11" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products12" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products13" element={<Product Banner={Banner3} />} />
                            <Route exact path="/products14" element={<Product Banner={Banner3} />} />
                        </Routes>
                            
                        
                        
                        <Whatsapp />
                        <UPArrow />
                        
                        <GoToTop />
                </div>
            }

                
            </Router>
    </div>
    );
}

export default App;