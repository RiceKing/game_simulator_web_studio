import React from 'react';
import PropTypes from 'prop-types'

const PersonCard = ({id=1, name='Vadim', age=25, profit=1, onHire=f=>f}) => {
  return (
    <div className="person-card">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Profit: {profit} BTC</p>
      <button onClick={onHire}>on Hire</button>
    </div>
  );
};

PersonCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  profit: PropTypes.number,
  onHire: PropTypes.func
}

export default PersonCard;
