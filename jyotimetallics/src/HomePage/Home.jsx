import React from 'react'

import Header from './Header/Header';
import Nav from '../NavBar/Nav';
import AboutHome from './About/AboutHome';
import Product from './Products/Products';

function Home() {
  return (
    <span>
      <Header />
      <AboutHome />
      <Product />
    </span>
  );
}

export default Home;