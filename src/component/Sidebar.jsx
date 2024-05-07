
import React from 'react';
import useColors from '../utils/colorpellete';

const Sidebar = ({ isOpen, onClose }) => {

    const colors = useColors();

    const onCloseClick = () => {
        onClose(prev => !prev);
        console.log(isOpen);
    }

    return (
        <div className={`bg-gray-300  text-black fixed top-0 right-0 h-full w-[100%] md:w-40  rounded shadow-lg `} style={{backgroundClip:colors.third}}>
            <div className='h-full'>
                <button className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none" onClick={onCloseClick}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <ul className='flex flex-col justify-evenly h-full items-center font-bold'>
                    <li className='focus:bg-gray-400 focus:text-white focus:outline-none cursor-pointer'><button>About</button></li>
                    <li className='focus:bg-gray-400 focus:text-white focus:outline-none cursor-pointer'><button>Portfolio</button></li>
                    <li className='focus:bg-gray-400 focus:text-white focus:outline-none cursor-pointer'><button>Contact</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
