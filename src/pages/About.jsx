import react, { useState, useEffect } from "react";
import profileImg from "../assets/profileImg.png";
const About = () => {
  const [isVisible, setIsVisible] = useState({
    header: false,
    profile: false,
    experience: false,
    contact: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".observe-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Header Section */}
        <div
          id="header"
          className={`mb-16 text-center observe-section transition-all duration-1000 transform ${
            isVisible.header
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate professional dedicated to creating meaningful impact
            through innovation and creativity.
          </p>
        </div>

        {/* Profile Section */}
        <div
          id="profile"
          className={`flex flex-col md:flex-row gap-10 mb-16 items-center observe-section transition-all duration-1000 transform ${
            isVisible.profile
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 flex-shrink-0 mx-auto md:mx-0">
            <img src={profileImg} alt="sachin's_img" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="35" r="25" fill="#E5E7EB" />
            <circle cx="50" cy="110" r="50" fill="#E5E7EB" />
            <path
              d="M50,75 C33,75 20,90 20,110 L80,110 C80,90 67,75 50,75 Z"
              fill="url(#gradient)"
            />
          </div>
          <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 rounded-2xl flex-1 p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Hello, I'm <span className="text-purple-400">Sachin Sharma</span>
            </h2>
            <p className="text-gray-200 dark:text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
              Hello! I'm <strong>Sachin Sharma</strong>, a passionate{" "}
              <strong>Full-Stack Web Developer</strong> specializing in the{" "}
              <strong>MERN stack</strong> (MongoDB, Express, React, Node.js). I
              love building responsive, user-friendly applications that solve
              real-world problems and provide great user experiences.
              <br />
              <br />
              My journey into development started with curiosity and quickly
              turned into a full-time passion. I’ve worked on various projects
              ranging from e-commerce sites to task managers—each one helping me
              refine my skills in both frontend and backend development.
              <br />
              <br />
              I take pride in writing clean, maintainable code and building
              applications with performance, scalability, and accessibility in
              mind. I'm always eager to learn new technologies and improve my
              craft.
              <br />
              <br />
              Outside of coding, I enjoy exploring new tech trends, designing UI
              elements, and contributing to open-source communities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/feed"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-all flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/SachinSharma22"
                className="px-5 py-2 bg-gray-700 hover:bg-gray-800 rounded-full transition-all flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:sachin83sharma03@gmail.com"
                className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-full transition-all flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div
          id="experience"
          className={`mb-16 observe-section transition-all duration-1000 transform ${
            isVisible.experience
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text flex items-center justify-center">
            Experience
          </h1>
          <div className="space-y-6">
            <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 p-6 rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <div className="pl-4">
                <h3 className="text-xl font-bold text-blue-400 flex items-center justify-between">
                  Data Visualization Intern (Virtual)
                  <p
                    className="text-white px-4 bg-blue-400 rounded-2xl p-2 hover:cursor-pointer hover:bg-blue-500"
                    onClick={() =>
                      window.open("/certificates/TATA.pdf", "_blank")
                    }
                  >
                    Certificate
                  </p>
                </h3>
                <p className="text-gray-300">
                  Tata Consultancy Services (TCS) | July 2025
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-400">
                  <li>
                    Completed a virtual internship focusing on Data
                    Visualization using tools like Tableau.
                  </li>
                  <li>
                    Worked on analyzing datasets and creating interactive
                    dashboards to extract meaningful insights.
                  </li>
                  <li>
                    Learned the importance of visual design in presenting
                    complex data clearly to stakeholders.
                  </li>
                  <li>
                    Received completion certification from Forage Inspiring and
                    empowering future professionals.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 p-6 rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
              <div className="pl-4">
                <h3 className="text-xl font-bold text-purple-400 flex items-center justify-between">
                  Data Analytics Intern (Virtual)
                  <p
                    className="text-white px-4 bg-purple-400 rounded-2xl p-2 hover:cursor-pointer hover:bg-purple-500"
                    onClick={() =>
                      window.open("/certificates/deloitte.pdf", "_blank")
                    }
                  >
                    Certificate
                  </p>
                </h3>
                <p className="text-gray-300">Deloitte | July 2025</p>
                <ul className="list-disc list-inside text-gray-400 mt-1">
                  <li>
                    Gained hands-on experience in data cleaning, analysis, and
                    reporting.
                  </li>
                  <li>
                    Worked on business case studies involving large-scale data
                    sets.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-opacity-10  backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 p-6 rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
              <div className="pl-4">
                <h3 className="text-xl font-bold text-pink-400 flex items-center justify-between">
                  AI for Beginners
                  <p
                    className="text-white px-4 bg-pink-400 rounded-2xl p-2 hover:cursor-pointer hover:bg-pink-500"
                    onClick={() =>
                      window.open("/certificates/HPLIFE.pdf", "_blank")
                    }
                  >
                    Certificate
                  </p>
                </h3>
                <p className="text-gray-300">HP LIFE Program | July 2025</p>
                <ul className="list-disc list-inside text-gray-400 mt-1">
                  <li>Learned the fundamentals of Artificial Intelligence.</li>
                  <li>
                    Explored ethical and practical aspects of AI in real-world
                    applications.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-700 border-opacity-40 p-6 rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
              <div className="pl-4">
                <h3 className="text-xl font-bold text-teal-400 flex items-center justify-between">
                  Two Weeks Content Writing Internship
                  <p
                    className="text-white px-4 bg-teal-400 rounded-2xl p-2 hover:cursor-pointer hover:bg-teal-500"
                    onClick={() =>
                      window.open("/certificates/InAmigos.pdf", "_blank")
                    }
                  >
                    Certificate
                  </p>
                </h3>
                <p className="text-gray-300">
                  InAmigos Foundation | April 2025
                </p>
                <ul className="list-disc list-inside text-gray-400 mt-1">
                  <li>
                    Created engaging content for social and education topics
                  </li>
                  <li>
                    Improved SEO rankings, and collaborated with design and
                    editorial teams.
                  </li>
                  <li>
                    Learned to break down complex ideas into simple language.
                  </li>
                  <li>
                    A skill that complements technical writing and documentation
                    in full stack development.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
