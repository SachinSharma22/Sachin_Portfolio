import React, { useState, useEffect } from 'react';
// import weartherbg from '../assets/WeatherImg.png'

const Projects = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    projects: false
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setIsVisible(prev => ({...prev, [id]: true}));
        }
      });
    }, {threshold: 0.1});
    
    const sections = document.querySelectorAll('.observe-section');
    sections.forEach(section => observer.observe(section));
    
    return () => observer.disconnect();
  }, []);

  // Sample projects - replace with your own
  const projects = [
    {
      title: "e-Commerce",
      description: "An e-commerce platform with secure payment integration, user authentication, and a responsive design for optimal user experience.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "project1", // This will be used for the SVG pattern
      color: "from-blue-500 to-indigo-600",
      link: "https://github.com/SachinSharma22/E-Commerce",
      github: "https://github.com/SachinSharma22/E-Commerce"
    },
    {
      title: "Weather Web App",
      description: "A simple and responsive weather forecasting app built using React and OpenWeatherMap API. It allows users to search any city and instantly view real-time weather details like temperature, humidity, wind speed, and conditions with a clean UI.",
      tags: ["HTML5","CSS3","JavaScript"],
      image: "project2",
      color: "from-purple-500 to-pink-600",
      link: "https://sachinsharma22.github.io/My-Weather-App/",
      github: "https://github.com/SachinSharma22/My-Weather-App"
    },
    {
      title: "Personl Portfolio Demo",
      description: "A personal portfolio website built to showcase my projects, skills, and contact information. Designed with responsive layout and smooth navigation using HTML, CSS, and JavaScript to demonstrate my frontend development skills.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      image: "project3",
      color: "from-teal-500 to-green-600",
      link: "https://sachinsharma22.github.io/Sachin-sPortfolio/",
      github: "https://github.com/SachinSharma22/Sachin-sPortfolio"
    },
    {
      title: "Task Manager App",
      description: "A full-stack MERN (MongoDB, Express, React, Node.js) application that allows users to add, edit, delete, and filter tasks as active or completed. Includes JWT authentication and responsive UI with smooth user experience.",
      tags: ["React.js", "Node.js", "MongoDB","Express.js","JWT"],
      image: "project4",
      color: "from-pink-500 to-purple-600",
      link: "https://github.com/SachinSharma22/Task_Manager_App",
      github: "https://github.com/SachinSharma22/Task_Manager_App"
    }
  ];

  // Function to generate a unique pattern for each project
  const getPatternSvg = (type) => {
  // If `type` is actually an imported image, render it
  if (typeof type === "string" && type.startsWith("project")) {
    // Return SVGs for project keys
    switch (type) {
      case 'project1':
        return (
          <svg className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 text-white opacity-10" viewBox="0 0 100 100" fill="currentColor">
            <path d="M0,0 L100,0 L100,100 L0,100 Z M20,20 L80,20 L80,80 L20,80 Z"></path>
          </svg>
        );
      case 'project3':
        return (
          <svg className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 text-white opacity-10" viewBox="0 0 100 100" fill="currentColor">
            <polygon points="50,10 90,90 10,90"></polygon>
          </svg>
        );
      default:
        return (
          <svg className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 text-white opacity-10" viewBox="0 0 100 100" fill="currentColor">
            <rect x="10" y="10" width="80" height="80"></rect>
          </svg>
        );
    }
  } else {
    // Assume it's an imported image and render it
    return (
      <img
        src={type}
        alt="Project Background"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-50 "
      />
    );
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div 
          id="header" 
          className={`mb-16 text-center observe-section transition-all duration-1000 transform ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">My Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my dedication to crafting innovative solutions through code. Each project represents a unique challenge I've embraced and overcome.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div 
          id="projects" 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 observe-section transition-all duration-1000 transform ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{transitionDelay: '200ms'}}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-opacity-10  backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 rounded-xl overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl relative "
              style={{ transitionDelay: `${index * 100 + 300}ms` }}
            >
              {/* Project Pattern */}
              {getPatternSvg(project.image)}
              
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} text-transparent bg-clip-text`}>
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-gray-800 bg-opacity-50 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex justify-between mt-auto">
                  <a 
                    href={project.link} 
                    className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"></path>
                      <path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path>
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium transition-colors flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;