import React, {useState} from 'react'
import './ProductTemplate.css'

import '../Details.js'
import { Link } from 'react-router-dom';
import Uncoiler from './Additional/Uncoiler';
import HiLeveller from './Additional/HiLeveller';
import CoilCar from './Additional/CoilCar';
import PinchCumLeveller from './Additional/PinchCumLeveller';
import DeflectorCumPinchRoll from './Additional/DeflectorCumPinchRoll';


function ProductTemplate(props) {

    const [isZoom, setIsZoom] = useState(false);

    return (
        <>
        
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
                                        <div className={`${isZoom && `zoom`} div__responsive div${id} ${isPortrait && `portraitDiv`}`} onClick={()=> setIsZoom(!isZoom)}>
                                            <img
                                                alt="1"
                                                src={image}
                                                className={`image__animation image${id} ${isPortrait && `portrait`} ${isZoom && `zoomImg`} `}
                                            />
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
                                        ||
                                        (id == 9 && <CoilCar />)
                                        ||
                                        (id == 10 && <CoilCar />)
                                        ||
                                        (id == 13 && <PinchCumLeveller />)
                                        ||
                                        (id == 12 && <DeflectorCumPinchRoll />)
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
            </>
    );
}

export default ProductTemplate