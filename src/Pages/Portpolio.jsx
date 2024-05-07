// Portpolio.js

import React, { useContext, useEffect } from 'react';
import PortfolioMain from './PortpolioMain';
import PortpolioMiddle from '../component/PortpolioMiddle';
import WhatWeOffer from '../component/WhatWeOffer';



const Portpolio = () => {



  return (
    <div className=' ' >
      <PortfolioMain  />
      <div
        className='absolute lg:top-[135%] md:top-[70%] top-[100%] w-full h-screen'
      
      >
        <h1 className='text-4xl font-semibold p-2 text-center'>Our Services</h1>
        <hr className="border-t-2 border-gray-300 mx-auto w-64 mb-8" />
        <WhatWeOffer/> 
      </div>
    </div>
  );
};

export default Portpolio;
