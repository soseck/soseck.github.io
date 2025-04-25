
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ndeye Sokhna SECK
            </h1>
            <h2 className="text-2xl text-blue-600 mb-6">AI & Data Product Manager</h2>
            <p className="text-lg text-gray-700 mb-8">
              Transforming business challenges into data-driven AI solutions.
              Passionate about leveraging AI technologies to create impactful products.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="/portfolio.jpeg" 
              alt="Ndeye Sokhna SECK" 
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
