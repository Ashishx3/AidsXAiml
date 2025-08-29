import React from "react";
import "@/styles/Heeo.css"; // fixed typo

const HeroSection = ({ collegeName = "LNCT" }) => {
  return (
    <div className="text-center px-4 py-12">
      {/* Main Heading */}
      <h1 className="fonta text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
        Welcome to IT Block
      </h1>

      {/* Sub Heading */}
      <h3 className="text-white text-center max-w-3xl mx-auto mt-4 text-lg sm:text-xl md:text-2xl leading-relaxed">
        The hub of <span className="font-semibold text-pink-400">Artificial Intelligence & Data Science</span> 
         &nbsp;and <span className="font-semibold text-purple-400">AIML</span> at {collegeName}.  
        <br />
        A platform for <span className="underline decoration-pink-500">innovation</span>, &nbsp;
        <span className="underline decoration-purple-500"> learning</span>, and 
        <span className="underline decoration-red-500"> collaboration</span>.
      </h3>
    </div>
  );
};

export default HeroSection;
