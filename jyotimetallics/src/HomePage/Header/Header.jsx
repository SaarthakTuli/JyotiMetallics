import React from 'react'
import Banner from '../../assets/Banner1.jpg'

function Header() {
  return (
      <header className='banner'>
              <img
                  className='banner__img'
                  src={Banner}
                  alt="Banner-1"
          />
          
          <div className='banner__contents'>
              <h1 className='banner__title'>Welcome to Jyoti Metallics</h1>
              <button className='banner__button'>Know More</button>
          </div>

    </header>
  )
}

export default Header