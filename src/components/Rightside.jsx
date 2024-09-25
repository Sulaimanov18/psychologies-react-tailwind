import React from "react";
import Navbar from "./Navbar"; // Adjust path if necessary
import Main from "./Link"; // Adjust path if necessary

const RightSide = () => {
  return (
    <div className="w-full md:w-1/2 bg-secondary flex flex-col pt-16 md:pt-0 h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 ">
        <Main />
      </div>
    </div>
  );
};

export default RightSide;
