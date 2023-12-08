import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

// react icons insert
import { FaXmark } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
     
    // create usestate that initial value is false 
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [isStickyMenu , setIsStickyMenu] = useState(false);


    // create an useEffect hook with the help of ReactJS
    useEffect(()=> {
        const handleScroll = () => {
            const scollPosition = window.scrollY;
            if(scollPosition > 100){
                setIsStickyMenu(true);
            }
            else{
                setIsStickyMenu(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    // toggle menu create
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    // create a router using array object
    const links = [
        {link: "Home", path: 'home'},
        {link: "Services", path: 'services'},
        {link: "About", path: 'about'},
        {link: "Product", path: 'product'},
        {link: "Testimonial", path: 'testmonial'},
        {link: "FAQ", path: 'faq'},
    ]

  return (
      <header className='w-full bg-black md:bg-white text-white fixed top-0 right-0 z-50 shadow-lg'>
        <nav className={`py-4 px-4 ${isStickyMenu ? "sticky text-white top-0 left-0 right-0 border-b bg-black duration-300" : ""}`}>
            <div className='flex justify-between items-center text-base gap-8'>
                <a href="" className='text-2xl flex lg:text-black items-center font-semibold space-x-3'><img src="" alt="" /><span className={`${isStickyMenu ? "sm:text-white" : "sm:text-black"}`}>NEXCENT</span></a>

            <ul className='hidden md:flex space-x-12'>
                {
                    links.map(({link , path}) => <Link spy={true} smooth={true} offset={-100} to={path} className={`cursor-pointer text-base block hover:text-brown-900 hover:first:font-medium ${isStickyMenu ? "text-white" : "text-black"}`}>{link}</Link> )
                }
                {/* cursor-pointer text-base text-black block hover:text-brown-900 hover:first:font-medium */}
            </ul>
                
                {/* btn for large device */}
                <div className='space-x-12 hidden lg:flex items-center '>
                    <Link to='' className={`cursor-pointer hover: ${isStickyMenu ? "text-white" : "text-black"}`}>Login</Link>
                    <button className={`${isStickyMenu ? "text-black bg-white" : "text-white bg-green-700"} px-4 py-3`}>Sign up</button>
                    
                </div>

                {/* menu btn for only mobile devices */}
                <div className='md:hidden'>
                    <button 
                    onClick={toggleMenu}
                    className='text-gray-800 focus:outline-none focus:text-gray-700'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-white'/>) : (<FaBars className='h-6 w-6 text-white' />)
                        }
                    </button>
                </div>
            </div>
        </nav>

        {/* nav items for mobile devices */}
        <div className={`span-y-4 px-4 py-7 bg-green-500 ${isMenuOpen ? "block fixed top-12 right-0 left-0" : "hidden"}`}>
        {
            links.map(({link , path}) => <Link onClick={() => setIsMenuOpen(false)} spy={true} smooth={true} offset={-100} to={path} className="ursor-pointer text-base text-white block py-2 hover:text-green-900 hover:first:font-medium ">{link}</Link> )
         }
         
        </div>
    </header>
  )
}

export default Navbar
