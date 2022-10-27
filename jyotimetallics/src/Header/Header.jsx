import React from 'react'
import {Link} from 'react-router-dom'
import "./Header.css"

function Header({ Banner, text, lightText }) {
  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        background: `url(${Banner}), linear-gradient(#111, #000)`,
        backgroundPosition: "center center",
        // backgroundRepeat: 'no-repeat'
      }}>
      <div className='banner__contents'>
        <h1 className={`banner__title ${lightText && `light`}`}>{text}</h1>
        {/* <button className='banner__button'>
          <Link to="/about">Know More</Link>
        </button> */}
      </div>

    </header>
  );
}

export default Header