import React from 'react'
import "./Header.css"

import Banner from "../../Banner/Banner1.jpg"

function Header() {
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        background: `url(${Banner}), linear-gradient(#111, #000)`,
        backgroundPosition: "center center"
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>Welcome to Jyoti Metallics</h1>
        <button className='banner__button'>Know More</button>
      </div>

    </header>
  );
}

export default Header