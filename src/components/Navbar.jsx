import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [email, setEmail] = useState(""); // State for email input
  const [error, setError] = useState(""); // State for email validation error

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubscribePopup = () => {
    setShowSubscribePopup(!showSubscribePopup);
    setError(""); // Reset error message when popup is toggled
    setEmail(""); // Clear email input when popup is closed
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    // Simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail()) {
      setError("Please enter a valid email address.");
      return;
    }

    alert("You have subscribed!");
    toggleSubscribePopup(); // Close popup after submission
  };

  return (
    <>
      <div className="w-full bg-secondary text-primary p-4 fixed top-0 left-0 z-20 flex items-center justify-between md:static">
        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu Links */}
        <div className={`absolute top-16 left-0 right-0 bg-secondary p-4 flex flex-col items-center ${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <Link to="/home" id="homeLink1" className="text-xl hover:underline mb-2" onClick={() => setIsOpen(false)}>Home</Link> {/* Link to Home */}
          <button onClick={toggleSubscribePopup} className="text-xl hover:underline mb-2">Subscribe</button> {/* Open Subscribe Popup */}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/home" id="homeLink" className="text-xl hover:underline">Home</Link> {/* Link to Home */}
          <button onClick={toggleSubscribePopup} className="text-xl hover:underline">Subscribe</button> {/* Open Subscribe Popup */}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4 ml-auto">
          <a href="https://facebook.com" className="text-primary hover:text-blue-600">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-primary hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-primary hover:text-pink-600">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Subscribe Popup */}
      {showSubscribePopup && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-1/3">
            <button
              className="absolute top-2 right-2 text-xl text-gray-500"
              onClick={toggleSubscribePopup}
            >
              &times;
            </button>
            <h2 className="text-2xl mb-4">Subscribe to our Newsletter</h2>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="border border-gray-300 p-2 w-full mb-2"
            />
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error if any */}
            <button
              className="bg-secondary text-white p-2 w-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
