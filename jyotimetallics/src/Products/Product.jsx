import React from 'react'

import '../Details.js'

import ProductTemplate from './ProductTemplate'
import Header from '../Header/Header'

function Product(props) {
  return (
    <>
      <Header banner={"Banner/Banner1.jpg"} text={"Product"} lightText={false} />
      <div>
				<img
					src='Banner/Banner2.jpg'
					style={{
						position: "absolute",
						top: "0",
						width: "100%",
						height: "448px",
						objectFit: "cover",
					}}
				/>
			</div>
      <ProductTemplate props={props} />
    </>
          
  )
}

export default Product