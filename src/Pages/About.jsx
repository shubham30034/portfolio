import React, { useRef } from 'react';
import useColors from '../utils/colorpellete';
import AboutSkills from '../component/AboutSkills';
import MySkills from '../component/MySkills';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import PortpolioMiddle from '../component/PortpolioMiddle';



const About = () => {

   

    const text = useRef();
    const img = useRef();

    useGSAP((context, contextSafe) => {
        gsap.from(text.current.children, {
            x: -800,
            duration: 1.0,
            stagger: 0.2,
            ease: "power2.inOut",
            // Adjust the stagger time to control the delay between each element
        });
        gsap.from(img.current, {
            x: 200,
            duration: 0.5,
            ease: "slow(0.7,0.7,false)" 
            
        });
    }, { scope: text, revertOnUpdate: true });

    const colors = useColors();

    return (
        <>
            <div className='px-20 text-white flex justify-around' >
                <div className='my-20' ref={text}>

                    <h1
                        className='font-bold text-4xl tracking-widest leading-tight mb-8'
                        style={{ backgroundImage: colors.gradientYellow, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
                    >
                        I Am Shubham
                    </h1>
                    <p className='text-lg leading-relaxed mb-6'>
                        A <span className='text-yellow-500'>Web Developer</span> crafting digital experiences with passion and creativity.
                    </p>
                    <button className='border border-yellow-500 p-2 m-2 rounded hover:bg-gray-500'>Contact Me</button>

                    <div className='mt-12'>
                        <div className='h-px w-32 bg-yellow-500 mb-4'></div>
                        <div className='h-px w-16 bg-yellow-500'></div>
                        <div className='h-px my-5 w-64 bg-yellow-500'></div>
                    </div>
                </div>
                <div className='lg:w-[20%] md:w-[30%] hidden md:block' ref={img}>
                    <img className='rounded' src="./image/PicsArt_07-03-10.15.48-03.jpeg" alt="" />
                </div>
            </div>
            <AboutSkills  />
            <MySkills />
           
        <PortpolioMiddle />
        
        </>
    );
};

export default About;
