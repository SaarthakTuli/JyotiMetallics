import React from 'react'

import '../Details.js'

import ProductTemplate from './ProductTemplate'
import Header from '../Header/Header'

function Product(props) {
  return (
    <>
      <Header banner={"./Banner/Banner1.jpg"} text={"Item"} lightText={ false} />
      <ProductTemplate props={props} />
    </>
          
  )
}

export default Product