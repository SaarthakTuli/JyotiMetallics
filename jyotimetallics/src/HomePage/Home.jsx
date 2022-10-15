import React from 'react'

import Header from './Header/Header';
import Nav from '../NavBar/Nav';
import About from '../HomePage/About/About';

function Home() {
  return (
    <span>
      <Nav />
      <Header />
      <About />
    </span>
  );
}

export default Home;