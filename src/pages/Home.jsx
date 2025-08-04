import React from "react";
import profile from "../assets/profileImg.png";
import "../styles/home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col-reverse md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 py-16 gap-12"
    >
      {/* Floating Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
      <div className="shape shape-3"></div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left z-10 w-full max-w-2xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 fade-in-up">
          👋 Hi, I'm Sachin Sharma
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 typing-text flex-wrap">
          Full-Stack Developer | MERN Stack | Problem Solver
        </h3>
        <p
          className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-400 fade-in-up leading-relaxed py-3 my-3"
          style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
        >
          I build responsive web apps with clean UI, efficient backend, and
          smooth user experiences. Passionate about turning ideas into reality
          using code.
        </p>
        <a
          href="/Resume/SachinWebDevResume.pdf"
          download
          className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition fade-in-up"
        >
          Download Resume
        </a>
      </div>

      {/* Image Section */}
      <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500 flex-shrink-0 mx-auto md:mx-0">
                  <img src={profile} alt="sachin's_img" />
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
    </section>
  );
};

export default Home;
