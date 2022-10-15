import React from 'react'

import Header from './Header/Header';
import Nav from '../NavBar/Nav';
import About from '../HomePage/About/About';
import Product from './Products/Products';

function Home() {
  return (
    <span>
      <Nav />
      <Header />
      <About />
      <Product />
    </span>
  );
}

export default Home;