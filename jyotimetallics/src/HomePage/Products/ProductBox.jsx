import React from 'react'
import "./Products.css"


const BaseUrl = "../../assets/products/";
//const b = "../public/assets/products/";

function ProductBox({ name, description, image }) {

  function truncate(str, n) { 
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  
  return (
      <div className='product__div' style={{
      backgroundSize: "cover",
      background: `url(${image}), linear-gradient(#111, #000)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    }}>
      

      <div className='product__innerDiv' id="overlay">
        <div className='product__contents'>
          <h1 className='product__title max__linesTitle'>{name}</h1>
          <h1 className='product__description max__linesContent'>{description}</h1>
          <a className='center'>Know More</a>
        </div>
      </div>
    </div>
  )
}

export default ProductBox