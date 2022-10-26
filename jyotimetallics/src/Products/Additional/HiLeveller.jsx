import React from 'react'
import './table.css'

function HiLeveller() {
  return (
    <div className='center container' style={{overflow: "scroll"}}>
      <div>
        <h1>Product Specification</h1>
        <table className='styled__table'>
          <tbody>
            <tr>
              <td className='main__column'><h2>Thickness</h2></td>
              <td className='detail__column'><h2>0.6mm to 2.5mm</h2></td>
            </tr>

            <tr>
              <td className='main__column'><h2>Available Width</h2></td>
              <td className='detail__column'><h2>2000mm</h2></td>
            </tr>

            <tr>
              <td className='main__column'><h2>No. of Rolls</h2></td>
              <td className='detail__column'><h2>17 - 21</h2></td>
            </tr>
            <tr>
              <td className='main__column'><h2>Flatness</h2></td>
              <td className='detail__column'><h2>0.5mm per meter</h2></td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>
    
  )
}

export default HiLeveller