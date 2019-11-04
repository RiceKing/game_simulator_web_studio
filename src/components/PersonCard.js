import React from 'react';
import PropTypes from 'prop-types'

const PersonCard = ({name, picture, dob, profit=1, onHire=f=>f}) => {
  return (
    <div className="person-card">
      <p>Name: {name.first} {name.last} </p>
      <img src={picture.thumbnail}/>
      <p>Age: {dob.age}</p>
      <p>Profit: {profit} BTC</p>
      <button onClick={onHire}>on Hire</button>
    </div>
  );
};

// PersonCard.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string,
//   age: PropTypes.number,
//   profit: PropTypes.number,
//   onHire: PropTypes.func
// }

export default PersonCard;
