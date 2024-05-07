import React, { useState } from 'react';
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import LocomotiveScroll from 'locomotive-scroll';

const FAQSection = () => {
  const [showAnswerIndex, setShowAnswerIndex] = useState(null);

  const FAQ = [
    {
      question: "How can a website improve my business's sales?",
      answer: "A well-designed website can significantly impact your sales by providing a platform for showcasing your products or services to a wider audience. It allows potential customers to learn about your offerings, make purchases online, and contact you for inquiries. With the right marketing strategies, your website can drive traffic, generate leads, and ultimately increase sales."
    },
    {
      question: "How does a website affect my business's credibility?",
      answer: "In today's digital age, having a professional website is essential for establishing credibility and trust with potential customers. A well-designed website reflects positively on your brand, demonstrating that you are a legitimate business with a strong online presence. It provides customers with easy access to information about your products or services, testimonials, and contact details, which can instill confidence in your business."
    },
    {
      question: "What features should my business website have?",
      answer: "The features of your business website depend on your industry, target audience, and specific goals. However, some essential features include a user-friendly interface, clear navigation, high-quality images or videos, product/service descriptions, contact information, social media integration, and secure payment options for e-commerce sites. It's important to prioritize features that enhance the user experience and support your business objectives."
    },
    {
      question: "Do I need a responsive website design?",
      answer: "Yes, having a responsive website design is crucial in today's mobile-centric world. A responsive design ensures that your website adapts seamlessly to various screen sizes and devices, providing a consistent and optimal viewing experience for users across desktops, laptops, tablets, and smartphones. This not only improves user satisfaction but also boosts your website's search engine rankings and overall performance."
    },
    {
      question: "How can I drive traffic to my website?",
      answer: "There are several strategies you can use to drive traffic to your website, including search engine optimization (SEO), content marketing, social media marketing, email marketing, pay-per-click (PPC) advertising, and influencer partnerships. By implementing a combination of these strategies and consistently creating valuable content for your target audience, you can increase visibility and attract more visitors to your website."
    }
  ];
  
  const locomotive = new LocomotiveScroll()

  const toggleAnswer = (index) => {
    setShowAnswerIndex(showAnswerIndex === index ? null : index);
  };

  return (
    <div className='lg:h-screen md:h-auto h-auto flex justify-center items-center' data-scroll data-scroll-speed="0.5">
      <div className='bg-black my-0 md:my-16 w-full md:w-[50%]'>
        <h1 className='text-white text-3xl font-bold p-5'>FAQ Section</h1>
        <div className='border border-gray-300 p-5 md:p-10'>
          {FAQ.map((elem, index) => (
            <div key={index} className="mb-4">
              <div className='flex justify-between items-center'>
                <h1 className='text-white'>{elem.question}</h1>
                {showAnswerIndex === index ? (
                  <IoIosRemove className='text-white text-2xl cursor-pointer' onClick={() => toggleAnswer(index)} />
                ) : (
                  <IoIosAdd className='text-white text-2xl cursor-pointer' onClick={() => toggleAnswer(index)} />
                )}
              </div>
              {showAnswerIndex === index && <p className='text-white mt-2'>{elem.answer}</p>}
              {index !== FAQ.length - 1 && <hr className="border border-gray-500 mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
