import React from 'react'
import laptop from '../../assets/laptop.jpg'
import laptop1 from '../../assets/laptop1.jpg'
import laptop2 from '../../assets/laptop2.jpg'
import myImage5 from '../../assets/arrow-right.png';

const Blog = () => {

    // create an object with the help of ReactJS
    const blogs = [
        {id:1, title: "Creating Streamlined Safeguarding processes with OneRen", image: laptop},
        {id:2, title: "What are your Safeguarding responsibilities and how can manage them?", image: laptop1},
        {id:3, title: "Revamping the Membership Model with Triathion Australia", image: laptop2},
    ]


  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
      <div className='md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl font-semibold mx-auto mb-4 md:w-4/5 text-gray-700]'>Caring is the new marketing.</h2>
            <p className='text-sm md:w-3/4 mx-auto text-gray-700 mb-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore veniam fugit quidem. Esse placeat necessitatibus dolorem doloremque quaerat temporibus rem consequuntur nulla neque dolorum repudiandae.</p>
      </div>


        {/* using map function */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map((blog)=> <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img className='rounded hover:scale-95 duration-300 transition-all' src={blog.image} alt="" />
                    <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 top-30 right-0 -bottom-14'>
                        <h3 className='leading-7 mb-3 text-gray-500 font-semibold'>{blog.title}</h3>
                        <div className='mt-5'>
                        <a href="" className='font-bold inline-block text-green-600 hover:text-neutral-700'>Read More<img src={myImage5} className='inline-block ml-1' alt="" /></a>     
                        </div>
                    </div>
                    
                </div> )
            }
        </div>

    </div>
  )
}

export default Blog
