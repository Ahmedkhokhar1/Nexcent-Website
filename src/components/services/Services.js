import React from 'react'
import myImage from '../../assets/Abstract.png';
import myImage1 from '../../assets/Hyperping.png';
import myImage2 from '../../assets/Instatus.png';
import myImage3 from '../../assets/Linear.png';
import myImage4 from '../../assets/Squarespace.png';
const Services = () => {

    const services = [
        {id:1, title: "Membership Organizations", description: "Our membership management software provides full automation of membership renewals and payments", image: myImage1},
        {id:2, title: "National Association", description: "Our membership management software provides full automation of membership renewals and payments", image: myImage3},
        {id:3, title: "Membership Organizations", description: "Our membership management software provides full automation of membership renewals and payments", image: myImage4},
    ]
  return (
    <div className='md:px-14 px-4 m-auto max-w-screen-2xl py-4 mt-24' id='services'>
        <div className='text-center'>
            <h2 className='text-4xl text-gray-700 font-semibold mb-2'>our Clients</h2>
            <p className='text-gray-700'>we have been working with some Forture 500+ clients</p>
        </div>

        {/* company logo */}
        <div className='flex flex-wrap justify-between mt-5 gap-8 items-center'>
            <img src={myImage} alt="" className='w-10' />
            <img src={myImage1} alt="" className='w-10' />
            <img src={myImage2} alt="" className='w-10'/>
            <img src={myImage3} alt="" className='w-10'/>
            <img src={myImage4} alt="" className='w-10'/>          
            <img src={myImage1} alt="" className='w-10'/>
            <img src={myImage2} alt="" className='w-10'/>
        </div>


        {/* service cards */}
        <div className='text-center mt-20 md:w-1/2 mx-auto'>
            <h2 className='text-4xl mb-3 text-gray-700 font-semibold'>Manage your entire community in a single system</h2>
            <p className='text-gray-700 text-[17px]'>Who is Nexcent suitable for?</p>
        </div>


        {/* create cards */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 mt-28'>
        {
            services.map((service)=> <div key={service.id} className='border border-black px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md cursor-pointer shadow hover:-translate-y-5 duration-300 hover:border-b-4 hover:border-b-indigo-700 transition-all flex justify-center h-full'>
                <div>
                    <div className='bg-gray-200 mx-auto w-14 h-14 rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" /></div>
                    <h4 className='text-2xl font-bold text-gray-700 mb-2 px-2'>{service.title}</h4>
                    <p className='text-sm text-gray-700'>{service.description}</p>
                </div>
            </div>
            )
        }
        </div>
    </div>
  )
}

export default Services
