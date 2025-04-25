
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700 mb-6">
            I'm an experienced professional transitioning into AI and Data Product Management. With a strong 
            background in analytics and project management, I bring a unique perspective to data-driven product 
            development and AI implementation.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            My journey into AI began with my passion for solving complex problems using data. I've since 
            expanded my skills to include machine learning principles, data visualization, and AI product 
            strategy to bridge the gap between technical capabilities and business needs.
          </p>
          <p className="text-lg text-gray-700">
            I'm particularly interested in developing AI solutions that enhance decision-making processes, 
            improve operational efficiency, and create meaningful user experiences. My goal is to leverage 
            AI to drive innovation while ensuring ethical and responsible implementation.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">AI Strategy</h3>
            <p className="text-gray-700">Developing effective strategies for AI implementation and adoption</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Data Analytics</h3>
            <p className="text-gray-700">Extracting insights from complex data to drive business decisions</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-blue-600 text-4xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Product Management</h3>
            <p className="text-gray-700">Building and managing AI-driven products with user-centered design</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
