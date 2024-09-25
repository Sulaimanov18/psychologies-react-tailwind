// CategoryCard.jsx

import React from 'react';

const CategoryCard = ({ name, description }) => (
  <div className="p-4 bg-white shadow-md rounded-lg hover:bg-blue-100 cursor-pointer">
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p>{description}</p>
  </div>
);

export default CategoryCard;  
