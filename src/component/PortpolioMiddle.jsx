import React from 'react';
import { CiLight } from "react-icons/ci";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioMiddle = () => {
  const container = useRef();
  const textContainer = useRef();
  const image = useRef();

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(container.current.children, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "power4.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
        end: 'bottom 50%',
        scrub: 1,
        toggleActions: 'play none none none',
      }
    });

    tl.from(textContainer.current.children,{
        y:500,
        opacity : 0,
        duration : 2,
        ease : "power3.inOut",
        stagger:1,
        yoyo:true,
        scrollTrigger:{
            trigger:textContainer.current,
            start: 'top 80%',
            end : 'bottom 100%',
            scrub : 1,
            toggleActions: 'play none none none',
        },
    });
    
    tl.from(image.current,{
        x : -800,
        opacity : 0,
        duration : 0.5,
        ease : "power2.out",
        scrollTrigger:{
            trigger: container.current,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 1,
            toggleActions: 'play none none none',
        }
    });
  }, { scope: container });

  return (
    <div className='mx-4 md:mx-32 text-white'>

      {/* Grid Container */}
      <div className='grid grid-cols-12'>
        <div className="absolute  md:col-span-12" ref={image}>
          <img
            src='https://i.pinimg.com/originals/1e/1c/b9/1e1cb9d8c7f4b59cbab14ffa00d58e6f.png'
            className="w-full h-screen md:h-screen"
          />
        </div>

        {/* Left Column */}
        <div className='md:col-span-4 hidden  md:flex md:flex-col items-center z-50' ref={container}>
          {/* Vertical Lines */}
          <div className='w-1 h-44 relative'>
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-transparent"></div>
          </div>
          <h1 className='text-yellow-200 mt-3'><CiLight /></h1>
          <div className='w-1 h-44 relative'>
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-transparent"></div>
          </div>
          <h1 className='text-yellow-200 mt-3'><CiLight /></h1>
          <div className='w-1 h-44 relative'>
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-transparent"></div>
          </div>
          <h1 className='text-yellow-200 mt-3'><CiLight /></h1>
          <div className='w-1 h-44 relative'>
            <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-yellow-200 to-transparent"></div>
          </div>
          <h1 className='text-yellow-200 mt-3'><CiLight /></h1>
        </div>

        {/* Right Column */}
        <div className='md:col-span-8 col-span-12 z-50'>
          <div className='px-2 md:px-4' ref={textContainer}>
            {/* Project Title */}
            <h1 className='text-3xl font-bold mb-6'>My Projects</h1>

            {/* Project Summary */}
            <p className='w-full md:w-[70%] mb-8'>
              "Netflix GPT" is an innovative project that brings together the functionalities of a movie database, review aggregator, and chatbot powered by GPT (Generative Pre-trained Transformer) technology. This project aims to provide users with a seamless experience of discovering movies, watching trailers, reading reviews from IMDb and Netflix, and engaging in natural language conversations to explore movie recommendations.
            </p>

            {/* Key Features */}
            <h2 className='text-xl font-bold mb-4'>Key Features:</h2>
            <ul className='list-disc pl-6 mb-8'>
              <li>Movie Trailer Finder: Users can search for any movie and instantly watch its trailer.</li>
              <li>Movie Review Aggregator: Access comprehensive reviews from both IMDb and Netflix.</li>
              <li>Netflix GPT Chat Feature: Interact with a chatbot for personalized movie recommendations.</li>
              <li>Backend Movie Recommendation System: Generate tailored movie recommendations based on user interactions.</li>
              <li>Firebase Authentication: Secure access and personalized experiences with Firebase.</li>
              <li>Redux Integration: Efficient state management for a smooth user interface.</li>
              <li>Tailwind CSS: Customizable and responsive design for aesthetic appeal.</li>
            </ul>

            {/* Technical Stack */}
            <h2 className='text-xl font-bold mb-4'>Technical Stack:</h2>
            <p className='mb-8'>
              The project utilizes React.js for the frontend, Node.js and Express.js for the backend, Firestore as the database, and various APIs for movie data and authentication. Redux is used for state management, and Tailwind CSS for styling.
            </p>

            {/* Conclusion */}
            <h2 className='text-xl font-bold mb-4'>Conclusion:</h2>
            <p>
              "Netflix GPT" is a comprehensive and innovative project that combines movie discovery, review aggregation, chatbot interaction, and personalized recommendations into a single platform. By integrating cutting-edge technologies such as GPT, Firebase, Redux, and Tailwind CSS, the project delivers a seamless and engaging user experience, catering to movie enthusiasts and casual viewers alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioMiddle;
