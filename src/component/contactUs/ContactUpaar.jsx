import React, { useRef } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


const ContactUpaar = () => {
  const linkedinRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(containerRef.current.children, {
      y: 400,
      duration: 0.8,
      ease: "power2.inOut",
      yoyo: true,
      stagger: 0.3
    })
  },{scope:containerRef});

  const handleHover = (ref) => {
    gsap.to(ref.current, { scale: 1.2, duration: 0.3 });
    gsap.fromTo(ref.current.children, { rotate: 0 }, { rotate: 360, duration: 0.5, ease: "power2.inOut" });
  };
  
  const handleHoverExit = (ref) => {
    gsap.to(ref.current, { scale: 1, duration: 0.3 });
  };

  return (
    <div data-scroll className='bg-black flex flex-col rounded-lg overflow-hidden '>
      <div className='md:my-20 my-5 h-[100%] bg-gray-500 bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg md:overflow-hidden overflow-scroll shadow-lg' ref={containerRef}>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold my-5 tracking-wide'>Get in touch</h1>
        </div>
        <div className='flex flex-col sm:flex-row justify-around my-4 border border-transparent'>
          {/* LinkedIn */}
          <a href='https://www.linkedin.com/in/shubham-kundu-a942831b7' target="_blank" rel="noopener noreferrer" className='flex flex-col items-center sm:w-1/3'>
            <div className='bg-blue-500 rounded-full h-40 w-40 flex justify-center items-center p-10 my-3' ref={linkedinRef} onMouseEnter={() => handleHover(linkedinRef)} onMouseLeave={() => handleHoverExit(linkedinRef)}>
              <FaLinkedin className='text-9xl' />
            </div>
            <div className='px-8 py-4'>
              <h1 className='text-center text-3xl font-semibold text-blue-200'>LinkedIn</h1>
              <p className='text-center'>
                Connect with me on LinkedIn to stay updated with my professional profile and activities.
              </p>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:shubhamkundu758@gmail.com" className='flex flex-col items-center sm:w-1/3'>
            <div className='bg-gray-500 rounded-full h-40 w-40 flex justify-center items-center p-10 my-3' ref={emailRef} onMouseEnter={() => handleHover(emailRef)} onMouseLeave={() => handleHoverExit(emailRef)}>
              <MdEmail className='text-9xl' />
            </div>
            <div className='px-8 py-4'>
              <h1 className='text-center text-3xl font-semibold text-red-300'>Email</h1>
              <p className='text-center'>
                Feel free to drop me an email at shubhamkundu758@gmail.com. I'll get back to you as soon as possible.
              </p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+918279898128" className='flex flex-col items-center sm:w-1/3'>
            <div className='bg-red-500 rounded-full h-40 w-40 flex justify-center items-center p-10 my-3' ref={phoneRef} onMouseEnter={() => handleHover(phoneRef)} onMouseLeave={() => handleHoverExit(phoneRef)}>
              <FaPhone className='text-9xl' />
            </div>
            <div className='px-8 py-4'>
              <h1 className='text-center text-3xl font-semibold'>Phone</h1>
              <p className='text-center'>
                You can also reach me directly via phone at +91 8279898128. Feel free to give me a call.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUpaar;
