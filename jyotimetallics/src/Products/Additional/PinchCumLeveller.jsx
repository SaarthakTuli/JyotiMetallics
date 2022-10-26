import React from 'react'
import './table.css'

function PinchCumLeveller() {
    return (
        <div className='center container'>
            <div>
                <h1>Product Specification</h1>
                <table className='styled__table'>
                    <tbody>
   
                        <tr>
                            <td className='main__column'><h2>Materials</h2></td>
                            <td className='detail__column'><h2>Steel</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Corrosion Resistance</h2></td>
                            <td className='detail__column'><h2>Yes</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Usage/Apllication</h2></td>
                            <td className='detail__column'><h2>Cold Rolling Mills for Staining and Flatting</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Roll Hardness</h2></td>
                            <td className='detail__column'><h2>55-60 HRC</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Counry of Origin</h2></td>
                            <td className='detail__column'><h2>Made in India</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Roll Steel Grade</h2></td>
                            <td className='detail__column'><h2>EN31</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>No. of Pinch Rolls</h2></td>
                            <td className='detail__column'><h2>5 & 7</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Motor Power</h2></td>
                            <td className='detail__column'><h2>As Per Requiremenr</h2></td>
                        </tr>

                        <tr>
                            <td className='main__column'><h2>Phase Type</h2></td>
                            <td className='detail__column'><h2>3 Phase</h2></td>
                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default PinchCumLeveller