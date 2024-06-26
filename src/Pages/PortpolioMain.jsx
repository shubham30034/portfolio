import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

const PortfolioMain = () => {
  const image1 = useRef();
  const image2 = useRef();
  const container = useRef();
  const tl = gsap.timeline({ yoyo:true, repeat:-1 });

  useGSAP(() => {
    tl.from(image1.current, { opacity: 0, duration: 1, delay: 0.5, ease: "power4.out" });
    tl.from(image2.current, { opacity: 0, duration: 1, ease: "power4.out" });

  }, {});

  useGSAP(() => {
    gsap.from("h1", {
      x: 500,
      duration: 1.5,
      ease: "power4.out"
    });
    gsap.from("p", {
      y: -200,
      duration: 0.8,
      ease: "power4.out"
    });
  }, { scope: container, revertOnUpdate: true });

  return (
    <div >
    <div className='w-full flex justify-center relative h-screen' ref={container}>
      <div className='absolute md:left-1/4 lg:left-[35%] left-1/5 top-10 z-30'>
        <h1 className='text-yellow-400 md:text-4xl text-2xl font-bold w-full animate-pulse text-center'>Full Web Solution For <br /> Your Business Contact Us</h1>
      </div>
      <div className='absolute md:left-1/5 left-1/20 top-32 z-20 text-center'>
        <p className='z-40 font-light text-center  md:text-xl text-[2vh]'>Having a strong online presence through a well-designed website can revolutionize your business. <br />A website serves as a digital storefront, open 24/7, allowing potential customers <br />to learn about your products and services at their convenience. <br />It provides a platform to showcase your brand identity, expertise, and unique selling points, helping to build trust and credibility with your audience.</p>
      </div>

      <div className='relative'>
        <img ref={image1} className='w-full opacity-65' src="https://res.cloudinary.com/dtih6oqdb/image/upload/v1715141486/a-captivating-digital-illustration-with-a-vibrant--WvBobXGfTnmiFxRGnLA4fw-gxZ3lERoQFCYCg-drQ463g_kdgdhh.jpg" alt="" />
        <img ref={image2} className='w-full top-0 left-0 absolute opacity-100' src="https://res.cloudinary.com/dtih6oqdb/image/upload/v1715141486/a-captivating-and-dynamic-illustration-with-a-vibr-i3TMeMtrRkyZsHwv13TJJQ-gxZ3lERoQFCYCg-drQ463g_z6fcy4.jpg" alt="" />
      </div>
    </div>
    </div>
  );
};

export default PortfolioMain;
