import React from "react";

const LeftSide = () => {
  return (
    <div className="w-full md:w-1/2 bg-primary text-secondary flex flex-col items-center justify-center p-4 md:p-8 h-[20vh] md:h-auto">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img 
          src="src/assets/logo.png" 
          alt="logo" 
          className="w-16 h-16 md:w-24 md:h-24 mb-4" // Adjust size as needed
        />
        <div className="text-xs md:text-2xl font-bold text-center">
          Your Mental Wellness, Our Priority.
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
