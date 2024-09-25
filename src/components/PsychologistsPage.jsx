import React, { useState } from 'react';
import Navbar from './Navbar';
import PsychologistCard from './PsychologistCard';
import PsychologistModal from './PsychologistModal';
import { psychologists } from '../data';  

const PsychologistsPage = () => {
  const [selectedPsychologist, setSelectedPsychologist] = useState(null);

  const handleSelect = (psychologist) => {
    setSelectedPsychologist(psychologist);
  };

  const handleCancel = () => {
    setSelectedPsychologist(null);
  };

  const handleContact = () => {
    alert(`Contacting ${selectedPsychologist.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar /> {/* Navbar at the top */}

      <div className="container mx-auto py-10">
        <h2 className="text-4xl font-bold mb-6 text-center">Choose a Psychologist</h2>

        {/* Psychologists List */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3 justify-items-center">
          {psychologists.map((psychologist, index) => (
            <PsychologistCard
              key={index}
              psychologist={psychologist}
              onSelect={handleSelect}
            />
          ))}
        </div>

        {/* Psychologist Details Modal */}
        <PsychologistModal
          visible={!!selectedPsychologist}
          psychologist={selectedPsychologist}
          onCancel={handleCancel}
          onContact={handleContact}
        />
      </div>
    </div>
  );
};

export default PsychologistsPage;
