import React from "react";
import
{
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';

import Nav from './NavBar/Nav'
import Header from "./Header/Header";

import Home from './HomePage/Home'
import About from './About/About'; 
import Products from './Products/Products';
import Contact from './Contact/Contact';
import ErrorPage from "./ERROR/ErrorPage";
import Whatsapp from './Whatsapp/Whatsapp'

import './index.css'


function App() {
    return (
        <div className="App">
            <Router>

                <Nav />
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/contact" component={Contact} />
                    
                    <Route exact path ="/404" component={ErrorPage} />
                    <Redirect to="/404" />
                </Switch>

                <Whatsapp />

                {/* Creater Footer if necessary */}
            </Router>
    </div>
    );
}

export default App;