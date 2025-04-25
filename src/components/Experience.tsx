
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {/* Job 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">AI Product Manager</h3>
                <p className="text-blue-600">TechAI Solutions</p>
              </div>
              <p className="text-gray-600 mt-1 md:mt-0">2023 - Present</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Led the development of an AI-powered analytics dashboard, resulting in 30% faster decision-making for clients</li>
              <li>Implemented machine learning models to predict customer behavior, increasing retention rates by 25%</li>
              <li>Collaborated with data scientists and engineers to optimize AI algorithms for better performance</li>
              <li>Created product roadmaps and prioritized features based on data insights and user feedback</li>
              <li>Conducted user research to identify pain points and opportunities for AI implementation</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">AI Product Strategy</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Machine Learning</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Data Analytics</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Product Management</span>
            </div>
          </div>
          
          {/* Job 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Data Analytics Lead</h3>
                <p className="text-blue-600">DataDrive Inc.</p>
              </div>
              <p className="text-gray-600 mt-1 md:mt-0">2020 - 2023</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Transformed raw data into actionable business insights, driving a 20% increase in operational efficiency</li>
              <li>Built and managed a team of 5 data analysts, establishing best practices and workflows</li>
              <li>Developed data visualization dashboards that provided real-time metrics for executive decision-making</li>
              <li>Implemented data governance policies ensuring data quality and compliance with regulations</li>
              <li>Conducted training sessions on data literacy and basic AI concepts for non-technical stakeholders</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Business Intelligence</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Data Visualization</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Team Management</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Analytics</span>
            </div>
          </div>
          
          {/* Job 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Project Manager</h3>
                <p className="text-blue-600">Global Solutions Group</p>
              </div>
              <p className="text-gray-600 mt-1 md:mt-0">2017 - 2020</p>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Managed cross-functional teams to deliver technology projects on time and within budget</li>
              <li>Implemented data-driven decision-making processes, reducing project risks by 15%</li>
              <li>Coordinated with stakeholders to gather requirements and ensure alignment with business objectives</li>
              <li>Created and maintained project documentation, including risk assessments and status reports</li>
              <li>Introduced agile methodologies to improve team productivity and adaptability</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Project Management</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Agile</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Stakeholder Management</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Process Improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
