import React from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import gsap from "gsap"
import { useRef } from 'react';

const MySkills = () => {

  gsap.registerPlugin(ScrollTrigger)

  const container = useRef()

  useGSAP((context, contextSafe) => {
    gsap.from(container.current.children, {
        opacity: 0,
        x: -80,
        duration: 0.8,
        ease: 'power4.out',
        stagger: 0.3,
        yoyo: true, // Animates in reverse after completing
      
        scrollTrigger: {
          trigger: container.current,
          start: 'top 90%', // Adjust animation start point
          end: 'bottom 40%', // Adjust animation end point
          scrub: 1,
          toggleActions: 'play none none none',
        },
      });
  }, { scope: container });


  return (
    <div className='px-4 md:px-10 lg:px-20 my-20 ' ref={container}  >
      <h1 className="text-center text-3xl font-bold mb-6">My Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {/* Skill 1: JavaScript */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="JavaScript Logo" />
          <p className="text-white mt-4">JavaScript</p>
        </div>
        
        {/* Skill 2: HTML */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" alt="HTML Logo" />
          <p className="text-white mt-4">HTML</p>
        </div>
        
        {/* Skill 3: CSS */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo" />
          <p className="text-white mt-4">CSS</p>
        </div>
        
        {/* Skill 4: React */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" alt="React Logo" />
          <p className="text-white mt-4">React</p>
        </div>
        
        {/* Skill 5: Redux */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://redux.js.org/img/redux.svg" alt="Redux Logo" />
          <p className="text-white mt-4">Redux</p>
        </div>
        
        {/* Skill 6: MongoDB */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" alt="MongoDB Logo" />
          <p className="text-white mt-4">MongoDB</p>
        </div>
        
        {/* Skill 7: Prisma */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://www.prisma.io/img/logo.png" alt="Prisma Logo" />
          <p className="text-white mt-4">Prisma</p>
        </div>
        
        {/* Skill 8: Tailwind CSS */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://tailwindcss.com/_next/static/media/twitter-square.88e44276b56b1d27b99e29eb5fb63d9c.png" alt="Tailwind CSS Logo" />
          <p className="text-white mt-4">Tailwind CSS</p>
        </div>
        
        {/* Skill 9: GitHub */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" alt="GitHub Logo" />
          <p className="text-white mt-4">GitHub</p>
        </div>
        
        {/* Skill 10: SQL */}
        <div className='bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center p-4 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
          <img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="SQL Logo" />
          <p className="text-white mt-4">SQL</p>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
