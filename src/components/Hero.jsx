import React from "react";

const Hero = () => {
    return (
      <div className="relative w-full h-screen flex items-center bg-black">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
        />
  
        {/* Overlay Content */}
        <div className="relative z-10 text-white ml-24 max-w-full">
          <h1 className="text-3xl md:text-7xl font-bold">NEVER STOP LEARNING.
            <br />
          NEVER STOP GROWING.</h1>
          <h3 className="text-2xl md:text-3xl mt-3">LEARN WITH US!</h3>
          <p className="mt-3 text-base md:text-lg">Learn from the top Instructor over the World. <br />
          Learn the latest Technology Trend.</p>
        </div>
  
        {/* Dark Overlay for Better Readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </div>
    );
  };
  
  export default Hero;
  
  