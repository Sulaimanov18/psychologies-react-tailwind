import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const PsychologistCard = ({ psychologist, onSelect }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt={psychologist.name} src={psychologist.photo} />}
      onClick={() => onSelect(psychologist)}
    >
      <Meta
        title={psychologist.name}
        description={`${psychologist.specialty}, ${psychologist.location}`}
      />
    </Card>
  );
};

export default PsychologistCard;

