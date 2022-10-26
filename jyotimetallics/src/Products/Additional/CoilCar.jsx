import React from 'react'
import './table.css'

function CoilCar() {
  return (
    <div className='center container'>
      <div>
        <h1>Product Specification</h1>
        <table className='styled__table'>
          <tbody>  
            <tr>
              <td className='main__column'><h2>Materials</h2></td>
              <td className='detail__column'><h2>Iron</h2></td>
            </tr>

            <tr>
              <td className='main__column'><h2>Max Capacity</h2></td>
              <td className='detail__column'><h2>5 MT to 35 MT (Coil Weight)</h2></td>
            </tr>

            <tr>
              <td className='main__column'><h2>Car Traverse</h2></td>
              <td className='detail__column'><h2>By: Hydraulic Cylinder / Hydraulic Motor / Geared Motor</h2></td>
            </tr>

            <tr>
              <td className='main__column'><h2>Surface Finishing</h2></td>
              <td className='detail__column'><h2>Polished</h2></td>
            </tr>
          </tbody>
    
        </table>
      </div>
    </div>
        
  )
}

export default CoilCar