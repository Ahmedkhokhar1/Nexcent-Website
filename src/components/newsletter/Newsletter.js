import React from 'react'
import myImage5 from '../../assets/arrow-right.png';

const Newsletter = () => {
  return (
    <div className='px-4 max-w-screen-2xl mx-auto bg-white py-16'>
      <div className='lg:w-2/5 flex items-center justify-center mx-auto'>
        <div className='text-center'>
        <h2 className='lg:text-5xl text-3xl text-gray-700 font-semibold mb-9 lg:leading-snug'>How to design your site footer like we did</h2>
        <div className='flex items-center justify-center gap-8'>
            <button className='btn-primary text-white'>Get a Demo<img src={myImage5} className='inline-block ml-2 brightness-0 invert' alt="" /></button>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
