import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AboutSkills = () => {
  const containerRef = useRef(null);
  const borderRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 100, // Adjust animation distance
      duration: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%', // Adjust animation start point
        end: 'bottom 40%', // Adjust animation end point
        toggleActions: 'play none none none',
        scrub: 1,
      },
    });

    gsap.to(borderRef.current, {
      boxShadow: '0 0 10px 5px rgba(255, 255, 0, 0.5)',
      repeat: -1,
      yoyo: true,
      duration: 1,
      delay: 1,
    });
  }, { scope: containerRef });

  return (
    <div data-scroll data-scroll-speed="3" className='px-4 md:px-10 lg:px-20 my-5 ' ref={containerRef}>
      <div className='border-2 border-yellow-400 rounded-lg p-6' ref={borderRef}>
        <h1 className="text-center text-2xl md:text-3xl my-2">About Skills</h1>
        <p className="text-center text-lg md:text-xl">
          As a skilled Full Stack Developer, I bring a wealth of experience in web development to the table. Proficient in HTML, CSS, and JavaScript, I specialize in building modern and responsive user interfaces. Additionally, my expertise extends to the MERN stack <span className='text-yellow-400'>(MongoDB, Express.js, React.js, Node.js)</span>, allowing me to develop full-fledged web applications. With a track record of successfully delivering projects encompassing both frontend and backend development, I am well-equipped to handle diverse client requirements and deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutSkills;
