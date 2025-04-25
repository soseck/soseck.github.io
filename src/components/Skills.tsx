
import React from 'react';

const Skills = () => {
  const aiSkills = [
    { name: "Machine Learning", level: 80 },
    { name: "Natural Language Processing", level: 75 },
    { name: "Computer Vision", level: 65 },
    { name: "AI Product Strategy", level: 90 },
    { name: "AI Ethics & Governance", level: 85 }
  ];
  
  const dataSkills = [
    { name: "Data Analysis", level: 95 },
    { name: "Data Visualization", level: 90 },
    { name: "SQL & Database Management", level: 85 },
    { name: "Python for Data Science", level: 80 },
    { name: "Business Intelligence", level: 90 }
  ];
  
  const productSkills = [
    { name: "Product Management", level: 95 },
    { name: "Agile Methodologies", level: 90 },
    { name: "User Research", level: 85 },
    { name: "A/B Testing", level: 80 },
    { name: "Product Analytics", level: 90 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI Skills</h3>
            <div className="space-y-4">
              {aiSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Data Skills</h3>
            <div className="space-y-4">
              {dataSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Product Skills</h3>
            <div className="space-y-4">
              {productSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-700">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Tableau', 'Power BI', 'Jira', 
              'Google Analytics', 'Excel', 'Git', 'Azure ML', 'AWS SageMaker', 
              'Jupyter Notebooks', 'Scikit-learn', 'Pandas', 'NLTK', 'Figma', 'R'].map((tool, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
