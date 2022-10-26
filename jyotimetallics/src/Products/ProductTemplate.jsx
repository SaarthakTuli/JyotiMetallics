import React from 'react'
import './ProductTemplate.css'

import '../Details.js'
import { Link } from 'react-router-dom';
import Uncoiler from './Additional/Uncoiler';
import HiLeveller from './Additional/HiLeveller';

function ProductTemplate(props) {
    return (
        <div className='center container'>
            {
                details.map((item) => {
          
                    const { id, name, description, image, isPortrait } = item

                    const path = props.props.location.pathname

                    console.log(path);

                    if (path == `/products${id}`) {
                        return (
                            <div className="template__main">
                                <div className='product'>
                                    <div className='center' style={{ alignItems: "center" }} >
                                        <div className={`div${id} ${isPortrait && `portraitDiv`}`}>
                                            <img
                                                alt="1"
                                                src={image}
                                                className={`image${id} ${isPortrait && `portrait`}`} />
                                        </div>
                                    </div>
                                
                            
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div className='template__details'>
                                            <h1 className='template__name'>{name}</h1>
                                            <h1 className='template__description'>{description}</h1>
                                        </div>
                                    </div>
                                </div>

                                <div style={{marginTop: "5rem"}}>
                                    {
                                        (id == 14 && <Uncoiler />)
                                        ||
                                        (id == 8 && <HiLeveller />)
                                    }
                                </div>

                                <div className='center'>
                                    <Link className='template__btn center' to='/contact'>Get Quote</Link>
                                </div>
                            </div>
                        )
                    } // if block ended
                })
            }
        </div>
    );
}

export default ProductTemplate