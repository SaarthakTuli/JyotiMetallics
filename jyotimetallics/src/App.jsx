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
import Products from './Products/Products';
import Contact from './Contact/Contact';
import ErrorPage from "./ERROR/ErrorPage";

import Footer from "./Footer/Footer";

import Whatsapp from './Whatsapp/Whatsapp';
import UPArrow from "./UpArrow/UPArrow";

import { ScatterBoxLoader } from "react-awesome-loaders";

import './index.css'
import GoToTop from "./GoToTop";


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
                            
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/contact" component={Contact} />
                            
                            <Route exact path ="/404" component={ErrorPage} />
                            <Redirect to="/404" />
                            </Switch>
                            
                        <Footer style={{paddingTop: "10rem",}} />
                        
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