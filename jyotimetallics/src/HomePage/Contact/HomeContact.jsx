import React from 'react'
import { Link } from 'react-router-dom'

import './HomeContact.css'

function HomeContact() {
  return (
      <div style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
          backgroundImage: `url("./images/contacthome.jpg")`,
        height: "448px"
      }}>
          
          <div style={{
              background: "rgba(0, 0, 0, 0.5)",
              backgroundSize: "cover",
              height: "448px"
          }}>
            <div className='homeContactDiv'>
                <button className='homeContactBtn'>
                    <Link to="./contact">
                        Contact Us
                    </Link>
                </button>
            </div>
          </div>
          
    </div>
  )
}

export default HomeContact