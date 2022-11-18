import React from 'react'
import './ProductBox'

import '../../Details.js'
import ProductBox from './ProductBox';
import { Link, useNavigate} from 'react-router-dom';



function Products() {

    const navigate = useNavigate();
    return (
        <div className='container product__container' style={{marginTop: "10rem", marginBottom: "15rem"}}>
            {
                details.map((product) => {
                
                    const { id, name, description, image } = product;
                    return (
                        // <Link key={id} to={{ pathname: `/products${id}`, params: { id: `${id}` } }}>
                            <div key={id} onClick={() => navigate(`/products${id}`, { state: {id}})}>
                                <ProductBox
                                    key={id}
                                    name={name}
                                    description={description}
                                    image={image}
                                />

                            </div>
                            
                        // </Link>
                    )
                })
            }
        </div>

        
    );
}

export default Products