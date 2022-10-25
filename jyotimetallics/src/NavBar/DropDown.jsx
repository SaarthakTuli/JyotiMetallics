import React from 'react'
import Dropdown from 'react-dropdown'

import { GoTriangleUp } from 'react-icons/go'
import {GoTriangleDown} from 'react-icons/go'

import './DropDown.css'
import '../Details.js'

function DropDown() {

  const options = []
  
  return(
    <div style={{display: "flex"}}>
      <Dropdown
      className='dropdown__main'
      placeholderClassName='dropdown__placeholder'
      menuClassName='dropdown__menu'
      arrowClassName='dropdown__arrow'
      arrowClosed={<GoTriangleDown style={{color: "white"}} />}
      arrowOpen={<GoTriangleUp style={{color: "white"}} />}
      
      options={options}
      placeholder={"Products"}
    />
    </div>
  );
}

export default DropDown