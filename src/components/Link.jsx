import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-6xl font-bold mb-4 text-primary font-light">
          GREAT THINGS <br /> ARE COMING
        </h2>
      </div>
      <div className="mb-8">
        <button className="text-secondary bg-primary p-2 pr-3 pl-3" onClick={() => navigate('/psychologists')}>
          Learn More
        </button>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-10">
        <a href="https://facebook.com" className="text-primary hover:text-blue-600">
          <FaFacebook size={24} />
        </a>
        <a href="https://twitter.com" className="text-primary hover:text-blue-400">
          <FaTwitter size={24} />
        </a>
        <a href="https://instagram.com" className="text-primary hover:text-pink-600">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Main;
