import React from 'react';
import PersonCard from './PersonCard.js'

const ResumesList = () => {
  return (
    <div className="resumes-list">
      <h3>Resumes</h3>
      <PersonCard
        onHire={() => console.log('cap')}
      />
    </div>
  );
};

export default ResumesList;
