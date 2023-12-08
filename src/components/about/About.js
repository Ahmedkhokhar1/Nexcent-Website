import React from 'react'
import myImage from '../../assets/Abstract.png';
import myImage1 from '../../assets/Hyperping.png';
import myImage2 from '../../assets/Instatus.png';
import myImage3 from '../../assets/Linear.png';
import myImage4 from '../../assets/Squarespace.png';
const About = () => {
    const image = "https://images.unsplash.com/photo-1603575448878-868a20723f5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  return (
    <div>
        {/* About Text */}
        <div className='px-3 flex items-center mt-28 gap-12 flex-col md:flex-row md:w-10/12 mx-auto justify-between mb-32' id='about'>
            <div>
                <img src={image} alt="" className='w-[1100px] rounded'/>
            </div>
            <div className=''>
                <h2 className='text-4xl text-gray-700 font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 sm:text-sm md:text-sm mb-6 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur ullam eveniet consequatur, voluptates facilis nobis error rerum id, expedita, at quae aliquam. Ex ratione labore inventore commodi, reiciendis dolore facere perspiciatis harum, id dicta quaerat saepe tenetur quibusdam magni?</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>

        {/* company state */}
        <div className='px-4 lg:px-14 justify-between flex flex-col items-center gap-8 py-10 h-full md:flex-row max-w-screen-2xl mx-auto my-8 bg-gray-200 '>
            <div className='md:w-1/2'>
                <div className=''>
                <h2 className='text-4xl text-gray-700 font-semibold mb-4 md:w-4/5'>Helping a local <span className='text-green-700 block'>bussiness reinvent itself</span></h2>
                <p className='md:w-3/4 sm:text-sm md:text-sm mb-6 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit Animi </p>
                </div>
            </div>

            {/* stats */}
            <div className='flex sm:items-center sm:flex-row flex-col justify-around md:w-1/2 mx-auto gap-12'>
                <div className='space-y-8'>
                    <div className='flex'>
                        <img src={myImage1} alt=""/>
                        <div className='px-2'>
                            <h4 className='text-2xl text-gray-500 font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <img src={myImage2} alt="" />
                        <div className='px-2'>
                            <h4 className='text-2xl text-gray-500 font-semibold'>828, 867</h4>
                            <p>Events Bookings</p>
                        </div>
                    </div>
                </div>



                <div className='space-y-8'>
                    <div className='flex'>
                        <img src={myImage3} alt="" />
                        <div className='px-2'>
                            <h4 className='text-2xl text-gray-500 font-semibold'>46, 238</h4>
                            <p>Clubs</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <img src={myImage4} alt="" />
                        <div className='px-2'>
                            <h4 className='text-2xl text-gray-500 font-semibold'>1,926,436 </h4>
                            <p>Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
