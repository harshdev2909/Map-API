import React from 'react'
import Boooking from './booking/Boooking'

export default function Homes()  {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='bg-blue-100'>
            <Boooking/>
            </div>
            <div className='col-span-2 bg-red-100'>
                <h1>map</h1>
            </div>
        </div>
    </div>
  )
}
