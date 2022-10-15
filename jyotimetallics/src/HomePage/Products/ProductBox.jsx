import React from 'react'
import "./Products.css"


const BaseUrl = "../../assets/products/";
//const b = "../public/assets/products/";

function ProductBox({ name, description, image }) {
  return (
      <div>
          <h1>{name}</h1>
          <h5>{description}</h5>
          <img src={image} />
    </div>
  )
}

export default ProductBox