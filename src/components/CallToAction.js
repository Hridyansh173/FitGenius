import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const CallToAction = () => {
  return (
    <div className="py-16 bg-blue-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Ready to get started with FitGenius?</h2>
        <p className="mb-8" data-aos="fade-up" data-aos-delay="200">Sign up now to receive exclusive updates and offers!</p>
        <form className="w-full max-w-sm mx-auto" data-aos="fade-up" data-aos-delay="400">
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <input
              type="email"
              className="w-full sm:w-auto flex-grow px-4 py-2 text-gray-700 rounded shadow-sm focus:outline-none"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-2 px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
