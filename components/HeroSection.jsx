import React from 'react'
import "@/styles/Heo.css"
const HeroSection = () => {
  return (
     <div className="text-center px-4">
      <h1 className="fonta text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
        Welcome to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient">
          IT Block
        </span>
      </h1>

    </div>
  )
}

export default HeroSection
