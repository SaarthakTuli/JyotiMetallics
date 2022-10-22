import React from 'react'
import GoToTop from '../GoToTop'
import Header from '../Header/Header'

function Products() {
  return (
    <>
      <Header Banner={"./Banner/AboutBanner.jpeg"} text={"About Us"} lightText={true} />

      <div>Products</div>

      <GoToTop />
     </>
    
  )
}

export default Products