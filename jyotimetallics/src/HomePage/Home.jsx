import React from 'react'
import Header from '../Header/Header';


import AboutHome from './About/AboutHome';
import Product from './Products/Products';
import GoToTop from '../GoToTop';
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <Header Banner={"./Banner/Banner1.jpg"} text={"Welcome to Jyoti Metallics"} lightText={false} />
      <AboutHome />
      <Product />

      <Footer style={{paddingTop: "10rem",}} page={true} />

      <GoToTop />
    </>
    
  );
}

export default Home;