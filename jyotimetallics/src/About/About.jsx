import React from 'react'

import Header from '../Header/Header';
import Values from './Values';

import './About.css'

function About() {
  return (
    <>
      <Header Banner={"./Banner/AboutBanner.jpeg"} text={"About Us"} lightText={true} />
      <div className='about'>
        <h1>About</h1>

        <div className='about__values'>

        </div>
      </div>
      </>
    
  );
}

export default About