import React from "react";
import
{
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
import { withRouter } from "react-router-dom";

import Nav from './NavBar/Nav'
import Home from './HomePage/Home'
import About from './About/About'; 
import Products from './Products/Products';
import Contact from './Contact/Contact';
import ErrorPage from "./ERROR/ErrorPage";

import './index.css'


function App() {
    return (
        <div className="App">

           

            <Router>

            <Nav />

                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <IndexRoute component={ Home } /> */}
                    <Route exact path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/contact" component={Contact} />
                    
                    <Route exact path ="/404" component={ErrorPage} />
                    <Redirect to="/404" />
                        
                        
                </Switch>
            </Router>
    </div>
    );
}

export default App;