import React from "react";
import "@/styles/Heeo.css";

const HeroSection = ({ collegeName = "LNCT" }) => {
  return (
    <div className="text-center px-4 py-12">
      {/* Main Heading */}
<h1 
  className="
    text-transparent bg-clip-text 
    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
    animate-gradient 
    font-extrabold 
    tracking-[0.1px] 
    font-['Roboto_Condensed'] 
    text-[48px] sm:text-[64px] md:text-[80px] lg:text-[95px] 
    drop-shadow-lg
  "
>
 
        Welcome to IT Block
      </h1>

      {/* Sub Heading */}
      <h3 className="text-white text-center max-w-3xl mx-auto mt-4 text-lg font-normal   sm:text-xl md:text-2xl leading-relaxed">
        The hub of <span className="font-semibold text-pink-400">AIDS</span> 
         &nbsp;and <span className="font-semibold text-purple-400">AIML</span> at {collegeName}.  
        <br />
        A platform for <span className=" decoration-pink-500">innovation</span>, 
        <span className=" decoration-purple-500">learning</span>, and 
        <span className=" decoration-red-500"> collaboration</span>.
      </h3>
    </div>
  );
};

export default HeroSection;
