import React from 'react'
import './ErrorPage.css'

import { WifiLoader } from 'react-awesome-loaders';

function ErrorPage() {
  return (
    <div className='error'>
      <WifiLoader
        background={"transparent"}
        desktopSize={"150px"}
        mobileSize={"150px"}
        text={"ERROR 404: Page not Found"}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
    </div>
  )
}

export default ErrorPage