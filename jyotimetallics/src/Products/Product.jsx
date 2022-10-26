import React from 'react'

import '../Details.js'

import ProductTemplate from './ProductTemplate'
import Header from '../Header/Header'

import Banner from '../assets/Banner/Banner4.jpg'

function Product(props) {
  return (
    <>
      <Header banner={Banner} text={"Item"} lightText={ false} />
      <ProductTemplate props={props} />
    </>
          
  )
}

export default Product