import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useColors from '../utils/colorpellete';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const colors = useColors();
    const buttonRef = useRef();

    const onCloseClick = () => {
        onClose(prev => !prev);
    }

    const handleNavigation = (path) => {
        navigate(path);
        onCloseClick();
    }

    useGSAP(() => {
        gsap.from(buttonRef.current, {
            x:100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            stagger:0.5
        });
    }, { scope: buttonRef });

    return (
        <div className={`bg-gray-800 text-white fixed top-0 right-0 h-full w-64 md:w-80 rounded-l-lg shadow-lg z-50 transition-all duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='h-full flex flex-col justify-between'>
                <div>
                    <button className="absolute top-0 right-0 mt-4 mr-4 focus:outline-none" onClick={onCloseClick}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className='flex flex-col mt-10 space-y-4' ref={buttonRef}>
                        <li className='focus:bg-gray-700 focus:text-white focus:outline-none cursor-pointer font-bold text-3xl'>
                            <button onTouchStart={() => {}} onTouchEnd={() => handleNavigation("/about")} className="py-2 px-4 w-full text-left hover:bg-gray-700">About</button>
                        </li>
                        <hr />
                        <li className='focus:bg-gray-700 focus:text-white focus:outline-none cursor-pointer font-bold text-3xl'>
                            <button  onTouchStart={() => {}} onTouchEnd={() => handleNavigation("/portpolio")} className="py-2 px-4 w-full text-left hover:bg-gray-700">Portfolio</button>
                        </li>
                        <hr  className=' bg-slate-500'/>
                        <li className='focus:bg-gray-700 focus:text-white focus:outline-none cursor-pointer font-bold text-3xl'>
                            <button  onTouchStart={() => {}} onTouchEnd={() => handleNavigation("/contact")} className="py-2 px-4 w-full text-left hover:bg-gray-700">Contact</button>
                        </li>
                        <hr />
                    </ul>
                </div>
                <div className="text-center pb-4">
                    <p className="text-sm opacity-50">&copy; 2024 Your Company</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
