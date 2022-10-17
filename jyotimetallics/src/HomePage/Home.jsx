import React from 'react'
import Header from '../Header/Header';


import AboutHome from './About/AboutHome';
import Product from './Products/Products';
import HomeContact from './Contact/HomeContact';

function Home() {
  return (
    <>
      <Header Banner={"./Banner/Banner1.jpg"} text={"Welcome to Jyoti Metallics"} lightText={false} />
      <AboutHome />
      <Product />
      <HomeContact />
    </>
  );
}

export default Home;