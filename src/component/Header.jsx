import React, { useState } from 'react';
import useColors from '../utils/colorpellete';
import { CiTextAlignJustify } from "react-icons/ci";
import Sidebar from './Sidebar';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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
       navigate("/about")
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
        <img className=' w-24' src="./image/a-sophisticated-and-modern-logo-for-subhweb-a-cutt-2AW2oyEwTlC8VpuB1dqkow-v9c0XQVMSM-0RhqbiWUMpA.jpeg" alt="" />
      </div>
      <div className='hidden md:block'>
        <ul className='flex  gap-8 '>
           <button onClick={handelAbout}><li>About</li></button>
           <button onClick={handelPortfolio}> <li>Our Services</li></button> 
           <button onClick={handelContact}><li>Contact</li></button>
        </ul>
      </div>
      <div className="hidden md:block">
        <input
          type="search"
          placeholder="Search..."
          className="p-1 w-24 rounded-lg border border-gray-600 focus:outline-none"
          style={{ backgroundColor: colors.text }}
        />
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
