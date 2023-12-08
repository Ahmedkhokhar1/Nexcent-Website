import React from 'react'
import image from '../../assets/login.jpg';
import myImage1 from '../../assets/Hyperping.png';
import myImage2 from '../../assets/Instatus.png';
import myImage3 from '../../assets/Linear.png';
import myImage4 from '../../assets/Squarespace.png';
import myImage5 from '../../assets/arrow-right.png';
import laptop from '../../assets/laptop1.jpg'
const Product = () => {
    
  return (
    <div>
         <div className='px-3 flex items-center mt-28 gap-12 flex-col md:flex-row md:w-10/12 mx-auto justify-between mb-32' id='product'>
            <div>
                <img src={image} alt="" className='w-[1100px] rounded'/>
            </div>
            <div className=''>
                <h2 className='text-4xl text-gray-700 font-semibold mb-4 md:w-4/5'>How to design your site footer like we did</h2>
                <p className='md:w-3/4 sm:text-sm md:text-sm mb-6 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur ullam eveniet consequatur, voluptates facilis nobis error rerum id, expedita, at quae aliquam. Ex ratione labore inventore commodi, reiciendis dolore facere perspiciatis harum, id dicta quaerat saepe tenetur quibusdam magni?</p>
                <button className='btn-primary'>Learn More</button>
            </div>
        </div>

        
        {/* company state */}
        <div className='px-4 lg:px-14 justify-between flex flex-col items-center gap-8 py-10 h-full md:flex-row max-w-screen-2xl mx-auto my-8 bg-gray-200 '>
            <div className='md:w-1/3'>
                <img src={laptop} alt="" className='rounded-xl'/>
            </div>

            {/* stats */}
           <div className='md:w-2/3 mx-auto' id='testmonial'>
           <div>
            <p className='md:w-4/5 text-sm text-gray-700 mb-3 leading-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolores, obcaecati tempore cupiditate, minus dolor sed aliquam debitis illo porro exercitationem, adipisci quia. Quaerat voluptas illo, iusto, in asperiores accusamus soluta quidem nobis quia laborum fugiat repellat voluptates eos fugit itaque possimus neque blanditiis quos, esse at suscipit! Deserunt enim vitae officiis quas nostrum laborum ipsum, ab dicta a officia voluptatibus quis cum debitis dolorem saepe. Consectetur excepturi officiis harum.</p>
            <h5 className='text-green-700 text-xl font-semibold'>Tim Smith</h5>
            <p className='text-base text-gray-700'>British Dragon Boat Racing Association</p>
            <div>
                <div className='flex flex-wrap items-center gap-7 mt-3'>
                    <img src={myImage1}  className='w-[50px]' alt="" />
                    <img src={myImage2} alt="" className='w-[40px]' />
                    <img src={myImage3} alt="" className='w-[40px]'/>
                    <img src={myImage4} alt="" className='w-[40px]'/>
                    <img src={myImage2} alt="" className='w-[40px]'/>
                    <img src={myImage4} alt="" className='w-[40px]'/>
                <a href="" className='font-bold inline-block text-green-600 hover:text-neutral-700'>Meet all customers <img src={myImage5} className='inline-block' alt="" /></a>
                </div>  
            </div>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Product
