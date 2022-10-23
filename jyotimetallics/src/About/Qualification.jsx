import React from 'react'
import { BsFillTrophyFill } from 'react-icons/bs'
import { GiStarsStack } from 'react-icons/gi'
import { ImPriceTags } from 'react-icons/im'
import './Qualification.css'


function Qualification() {
  return (
      <div className='qualification__div '>
      <div className='qualification__box'>
          <BsFillTrophyFill  className='qualification__icon'/>

              <h1 className='qualification__name'>Best <br />Quality</h1>
      </div>
      
          <div className='qualification__box'>
          <ImPriceTags className='qualification__icon' />

          <h1 className='qualification__name'>Competitive <br />Rates</h1>
        </div>
          
          <div className='qualification__box'>
          <GiStarsStack className='qualification__icon' />

          <h1 className='qualification__name'>Personalized <br/> Experience</h1>
    </div>
      </div>
  )
}

export default Qualification