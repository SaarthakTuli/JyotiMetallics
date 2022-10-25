import React from 'react'
import './ProductBox'

import '../../Details.js'
import ProductBox from './ProductBox';
import { Link } from 'react-router-dom';



function Products() {
    return (
        <div className='container product__container' style={{
            marginTop: "5rem",
            marginBottom: "15rem"
        }}>
            {
            details.map((product) => {
                
                const { id, name, description, image } = product;
                return (
                    <Link to={`/products${id}`}>
                        <ProductBox
                        key={id}
                        name={name}
                        description={description}
                        image={image}
                        />
                    </Link>

              )  
            })
            }
        </div>
    );
}

export default Products