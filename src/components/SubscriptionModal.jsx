import React, { useState } from 'react';

const SubscriptionModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // To track submission status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate email subscription logic here, like an API call.
    setIsSubmitted(true);  // Change the modal to the success state
    setEmail("");          // Clear the input field
  };

  const handleClose = () => {
    setIsSubmitted(false); // Reset the modal to the initial state when closed
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        {/* X Button for closing */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times; {/* This is the X button */}
        </button>

        {!isSubmitted ? (
          <>
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="email" 
                className="w-full p-2 border rounded mb-4" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-primary text-secondary px-4 py-2 rounded">
                Subscribe
              </button>
            </form>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">You Subscribed!</h2>
            <button 
              onClick={handleClose}
              className="bg-primary text-secondary px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionModal;
