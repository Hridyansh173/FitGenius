import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white" data-aos="fade-up">FitGenius</h1>
        <p className="text-xl text-white mt-4" data-aos="fade-up" data-aos-delay="200">Your Smartest Health Companion</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded" data-aos="fade-up" data-aos-delay="400">Buy Now</button>
      </div>
    </div>
  );
};

export default Hero;
