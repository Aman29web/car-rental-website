import React from 'react'
// import { assets } from '../assets/assets'

const Carcard = ({car}) => {
  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer'>
      <div>
       <img src={car.imgage} alt="car Image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />
      {car.isAvaliable && <p className='absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full'>Available Now</p>}
      </div>
      <div></div>
    </div>
  )
}

export default Carcard
