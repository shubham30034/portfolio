import React, { useState } from 'react';
import useColors from '../utils/colorpellete';
import { CiTextAlignJustify } from "react-icons/ci";
import Sidebar from './Sidebar';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const colors = useColors();
  const [sidebaropen, setSidebaropen] = useState(false);
   const navigate = useNavigate()

    const container = useRef()


    useGSAP(()=>{
      gsap.from(container.current.children,{

         y : -300,
         duration : 0.8,
         stagger: 0.2,
         ease: "power2.in",
         delay:0.6
         
         
      })
    },{scope:container})


  const toggleSidebar = () => {
    setSidebaropen(prev => !prev);
    
  };

  const handelAbout = ()=>{
       navigate("/")
  }
  const handelPortfolio = ()=>{
       navigate("/portpolio")
  }
  const handelContact = ()=>{
       navigate("/contact")
  }

  return (
    <>
    
    <div
     ref={container}
    className={`flex justify-between items-center px-20  h-[153.6px] md:px-40  `} style={{ color: colors.text }}>
      <div>
        <img className=' w-24' src="https://res.cloudinary.com/dtih6oqdb/image/upload/v1715188947/a-creative-logo-design-for-websubh-with-a-modern-a-HH-D4mVySEKtnPhipYQ_VQ-sVEqCVOqTNWs4uMy2FnD4A_siusnu.jpg" alt="" />
      </div>
      <div className='hidden md:block'>
        <ul className='flex  gap-8 '>
           <button onClick={handelAbout}><li>About</li></button>
           <button onClick={handelPortfolio}> <li>Our Services</li></button> 
           <button onClick={handelContact}><li>Contact</li></button>
        </ul>
      </div>
      <div className="hidden md:flex md:gap-4  md:justify-center md:items-center">
      <a href='https://www.linkedin.com/in/shubham-kundu-a942831b7' target="_blank" rel="noopener noreferrer" className='flex flex-col items-center sm:w-1/3'>
       <button className=' text-2xl'><FaLinkedinIn/></button>
       </a>
      <a href='https://github.com/shubham30034' target="_blank" rel="noopener noreferrer" className='flex flex-col items-center sm:w-1/3'>
      <button className='  text-2xl' ><FaGithub/></button>
       </a>
       
      </div>
      <div className='md:hidden text-2xl'>
        <CiTextAlignJustify onClick={toggleSidebar} />
      </div>
    { sidebaropen &&  <div className={` z-50 absolute top-0 right-0 w-[80%] md:w-40 h-full rounded shadow-lg transition-transform ease-in-out ${sidebaropen ? " translate-x-[0%]" : " translate-x-[100%]"}`}>
        <Sidebar onClose={setSidebaropen} isOpen={sidebaropen} />
      </div>
      }
    </div>
    </>
  );
};

export default Header;
