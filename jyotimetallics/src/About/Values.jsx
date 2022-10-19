import React from 'react'
import './Values.css'

function Values({ title, desc, image}) {
  return (
    <div className='values__container'>
      <img
        src={image}
        alt="IMP"
        className='values__image'
      />

      <div className="values__contents">
        <h1 className='values__title'>{ title }</h1>
        <h1 className='values__description'>{ desc }</h1>
      </div>
          
    </div>
  )
}

export default Values