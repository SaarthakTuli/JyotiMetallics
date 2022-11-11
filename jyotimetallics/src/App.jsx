import React, { useState, useEffect } from "react";
import
{
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';

import Nav from './NavBar/Nav'

import Home from './HomePage/Home'
import About from './About/About'; 
import Documents from "./Documents/Documents";
import Contact from './Contact/Contact';
import ErrorPage from "./ERROR/ErrorPage";

import Whatsapp from './Whatsapp/Whatsapp';
import UPArrow from "./UpArrow/UPArrow";

import { ScatterBoxLoader } from "react-awesome-loaders";

import './index.css'
import GoToTop from "./GoToTop";


import Product from "./Products/Product";
import ScrollBar from "./ScrollBar/ScrollBar";


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

                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/documents" component={Documents} />
                            <Route exact path="/contact" component={Contact} />
                                
                            <Route exact path="/products1" component={Product} />
                            <Route exact path="/products2" component={Product} />
                             <Route exact path="/products3" component={Product} />
                            <Route exact path="/products4" component={Product} />
                            <Route exact path="/products5" component={Product} />
                            <Route exact path="/products6" component={Product} />
                            <Route exact path="/products7" component={Product} />
                            <Route exact path="/products8" component={Product} />
                            <Route exact path="/products9" component={Product} />
                            <Route exact path="/products10" component={Product} />
                            <Route exact path="/products11" component={Product} />
                            <Route exact path="/products12" component={Product} />
                            <Route exact path="/products13" component={Product} />
                            <Route exact path="/products14" component={Product} />
                            
                            <Route exact path ="/404" component={ErrorPage} />
                            <Redirect to="/404" />
                        </Switch>
                            
                        
                        
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