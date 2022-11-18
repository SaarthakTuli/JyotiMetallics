import React, { useEffect } from 'react';

import '../Details.js'

import ProductTemplate from './ProductTemplate'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { useLocation } from 'react-router';

function Product(props) {

	const location = useLocation();

  return (
	  <div>
      <Header banner={"./Banner/Banner2.jpg"} text={"Product"} lightText={false} />
      	<div>
			<img
				src='Banner/Banner2.jpg'
				style={{
					position: "absolute",
					top: "0",
					width: "100%",
					height: "448px",
					objectFit: "cover",
					zIndex: '-1',
				}}
			/>
		</div>
		  <ProductTemplate props={location.state.id} />
		  
		  <Footer style={{paddingTop: "10rem",}} page={false} />
    </div>
          
  )
}

export default Product