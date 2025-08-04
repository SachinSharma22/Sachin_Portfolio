import React, { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".skills-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", color: "from-blue-500 to-blue-700" },
    { name: "CSS", color: "from-purple-500 to-purple-700" },
    { name: "JavaScript", color: "from-yellow-500 to-yellow-600" },
    { name: "React", color: "from-cyan-500 to-cyan-700" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "Express.js", color: "from-blue-400 to-blue-600" },
    { name: "MongoDB", color: "from-green-600 to-green-800" },
    { name: "Tailwind CSS", color: "from-teal-500 to-teal-700" },
    { name: "Python", color: "from-indigo-500 to-indigo-700" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-5xl skills-section">
        <div
          className={`mb-16 text-center transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-opacity-10  backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 rounded-xl overflow-hidden shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${skill.color}`}></div>
              <div className="p-6 flex items-center justify-center">
                <div className="mr-4">
                  <svg
                    className={`w-8 h-8 text-gradient bg-gradient-to-r ${skill.color} text-transparent bg-clip-text`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z" />
                  </svg>
                </div>
                <h3 className="text-xl text-gray-300 font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuously expanding my skillset and staying updated with the
            latest technologies and best practices in web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
