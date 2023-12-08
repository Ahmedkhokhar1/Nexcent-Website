import React from 'react'

const Home = () => {
    const image = "https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 

  return (
    <div className='bg-white mt-60 md:flex justify-around px-10' id='home'>
    <div className='md:w-3/4 font-semibold leading-snug text-gray-600'>
        <h1 className='md:text-5xl text-[30px]'>Lessons and insights <span className='text-green-600 block'>from 8 years</span></h1>
        <p className='mb-8 text-gray-600 mt-2'>Where to grow you bussiness as a photographer: site or social media?</p>
        <button className='btn-primary'>Register</button>
    </div>
    <div className=''>
        <img src={image} alt="laptop-image" className='w-[500px] rounded' />
    </div>
    </div>
  )
}

export default Home
