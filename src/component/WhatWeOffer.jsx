import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatWeOffer = () => {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);

  useGSAP(() => {
    const boxes = containerRef.current.querySelectorAll('.mainContainer > div');
    boxes.forEach(box => {
      gsap.from(box.querySelectorAll('img'), {
        x: 20,
        ease: "power1.inOut",
        opacity: 0,
        duration: 1,
        repeat: -1,
        stagger: 2,
      });
    });
  }, { scope: containerRef,revertOnUpdate: true  });

  return (
    <>
      <div    className='mainContainer rounded-xl p-8 flex flex-col gap-8 ' ref={containerRef}>
        {/* Box 1 */}
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 lg:p-10'>
          <div className='w-full lg:w-3/4 pr-0 lg:pr-8 pb-6 lg:pb-0 '>
            <h1 className='text-3xl font-bold text-center lg:text-left text-white mb-4'>E-commerce Stores</h1>
            <p className='text-gray-400'>
              E-commerce Stores:
              Website development and design for online stores.
              Integration of payment gateways.
              Customization of shopping cart functionality.
              Optimization for mobile responsiveness.
              Implementation of product review and rating systems.
              Restaurants and Cafes:
              Creation of visually appealing menus.
              Online reservation system development.
              Integration of online ordering and delivery services.
              Implementation of customer feedback forms.
              Design and development of a responsive website highlighting ambiance and menu offerings.
            </p>
          </div>
          <div className='w-full lg:w-1/4 relative'>
            <img src="./image/e-commerse1.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0' />
            <img src="./image/e-commerse2.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
            <img src="./image/e-commerse3.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
          </div>
        </div>
        
        {/* Box 2 */}
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 lg:p-10'>
          <div className='w-full lg:w-3/4 pr-0 lg:pr-8 pb-6 lg:pb-0'>
            <h1 className='text-3xl font-bold text-center lg:text-left text-white mb-4'>Restaurants and Cafes</h1>
            <p className='text-gray-400'>
              Restaurants and Cafes:
              Creation of visually appealing menus.
              Online reservation system development.
              Integration of online ordering and delivery services.
              Implementation of customer feedback forms.
              Design and development of a responsive website highlighting ambiance and menu offerings.
            </p>
          </div>
          <div className='w-full lg:w-1/4 relative'>
            <img src="./image/res1.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0' />
            <img src="./image/res2.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
            <img src="./image/res33.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
          </div>
        </div>
        
        {/* Box 3 */}
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 lg:p-10'>
          <div className='w-full lg:w-3/4 pr-0 lg:pr-8 pb-6 lg:pb-0'>
            <h1 className='text-3xl font-bold text-center lg:text-left text-white mb-4'>Real Estate Agencies</h1>
            <p className='text-gray-400'>
              Real Estate Agencies:
              Development of property listings with search filters.
              Integration of virtual property tours.
              Implementation of online appointment scheduling for property viewings.
              Integration of mortgage calculators.
              Creation of a visually appealing website showcasing property images and details.
            </p>
          </div>
          <div className='w-full lg:w-1/4 relative'>
            <img src="./image/real1.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0' />
            <img src="./image/real2.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
            <img src="./image/real3.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
          </div>
        </div>

        {/* Box 4 */}
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 lg:p-10'>
          <div className='w-full lg:w-3/4 pr-0 lg:pr-8 pb-6 lg:pb-0'>
            <h1 className='text-3xl font-bold text-center lg:text-left text-white mb-4'>Consulting Firms</h1>
            <p className='text-gray-400'>
              Consulting Firms:
              Development of appointment booking systems.
              Integration of video conferencing for remote consultations.
              Creation of client portals for document sharing and collaboration.
              Implementation of newsletter subscription forms.
              Design and development of a professional website highlighting expertise and services offered.
            </p>
          </div>
          <div className='w-full lg:w-1/4 relative'>
            <img src="./image/consult1.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0' />
            <img src="./image/consult2.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
            <img src="./image/consult3.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
          </div>
        </div>

        {/* Box 5 */}
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 lg:p-10'>
          <div className='w-full lg:w-3/4 pr-0 lg:pr-8 pb-6 lg:pb-0'>
            <h1 className='text-3xl font-bold text-center lg:text-left text-white mb-4'>Fitness and Wellness Centers</h1>
            <p className='text-gray-400'>
              Fitness and Wellness Centers:
              Development of class scheduling and booking systems.
              Integration of online payment for membership fees.
              Creation of personalized training programs accessible through the website.
              Implementation of progress tracking tools for clients.
              Design and development of a motivating website showcasing success stories and testimonials.
            </p>
          </div>
          <div className='w-full lg:w-1/4 relative'>
            <img src="./image/fitness1.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0' />
            <img src="./image/fitness2.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
            <img src="./image/fitness3.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
          </div>
        </div>

        {/* Box 6 */}
        <div className='flex flex-col lg:flex-row justify-between items-center bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 lg:p-10'>
          <div className='w-full lg:w-3/4 pr-0 lg:pr-8 pb-6 lg:pb-0'>
            <h1 className='text-3xl font-bold text-center lg:text-left text-white mb-4'>Freelancers and Creatives</h1>
            <p className='text-gray-400'>
              Freelancers and Creatives:
              Portfolio website development to showcase previous work.
              Integration of client inquiry forms.
              Implementation of online appointment scheduling.
              Creation of a blog section to share insights and expertise.
              Design and development of a visually striking website reflecting the freelancer's unique style.
            </p>
          </div>
          <div className='w-full lg:w-1/4 relative'>
            <img src="./image/free1.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0' />
            <img src="./image/free2.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
            <img src="./image/free3.jpeg" alt="" className='rounded-lg shadow-md mb-2 lg:mb-0 absolute top-0 left-1/2 transform -translate-x-1/2' />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
