import React from 'react';
import ResumesList from './ResumesList.js'

const Resumes = () => {
  return (
    <div className="Resumes">
      <h2>Resumes</h2>
      <ResumesList count={5}/>
    </div>
  )
}

export default Resumes;
