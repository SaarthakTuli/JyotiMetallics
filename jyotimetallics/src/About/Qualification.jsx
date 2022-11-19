import React from 'react'
import { BsFillTrophyFill } from 'react-icons/bs'
import { GiStarsStack } from 'react-icons/gi'
import { ImPriceTags } from 'react-icons/im'
import './Qualification.css'


function Qualification() {
  return (
    <div className='qualification__div '>
      <div className='qualification__box'>
        <div className='qualification__content'>
          <BsFillTrophyFill className='qualification__icon' />
          <h1 className='qualification__name'>Best <br />Quality</h1>
        </div>
      </div>
      
      <div className='qualification__box'>
        <div className='qualification__content'>
          <ImPriceTags className='qualification__icon' />
          <h1 className='qualification__name'>Competitive <br />Rates</h1>
        </div>
      </div>
          
      <div className='qualification__box'>
        <div className='qualification__content'>
          <GiStarsStack className='qualification__icon' />
          <h1 className='qualification__name'>Personalized <br /> Experience</h1></div>
      </div>
    </div>
  )
}

export default Qualification