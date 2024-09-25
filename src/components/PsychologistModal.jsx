import React from 'react';
import { Modal, Button } from 'antd';

const PsychologistModal = ({ visible, psychologist, onCancel }) => {
  if (!psychologist) return null;

  // Create a contact URL for initiating a phone call
  const handleContact = () => {
    if (psychologist.phoneNumber) {
      window.location.href = `tel:${psychologist.phoneNumber}`;
    } else {
      alert('No phone number available');
    }
  };

  return (
    <Modal
      title={psychologist.name}
      visible={visible}
      onCancel={onCancel}
      width={380}
      footer={[
        <div className="flex" key="buttons">
          <Button
            key="contact"
            onClick={handleContact}
            type="primary"
            style={{ marginRight: 'auto' }}
          >
            Contact
          </Button>
          <Button
            key="close"
            onClick={onCancel}
          >
            Close
          </Button>
        </div>
      ]}
    >
      <div className="flex flex-col items-center">
        <img 
          alt={psychologist.name} 
          src={psychologist.photo} 
          style={{ width: '100%', height: 'auto' }} 
        />
        <p><strong>Specialty:</strong> {psychologist.specialty}</p>
        <p><strong>Location:</strong> {psychologist.location}</p>
        {psychologist.phoneNumber && (
          <p><strong>Phone Number:</strong> {psychologist.phoneNumber}</p>
        )}
      </div>
    </Modal>
  );
};

export default PsychologistModal;
