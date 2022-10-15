import React from 'react'
import './ProductBox'

import '../../Details.js'
import ProductBox from './ProductBox';



function Products() {
    return (
        <div>
            {details.map((product) => {
                
                const {id, name, description, image} = product;
                return (
                    <ProductBox
                        key={id}
                        name={name}
                        description={description}
                        image={image}
                    />

              )  
            })
            }
        </div>
    );
}

export default Products