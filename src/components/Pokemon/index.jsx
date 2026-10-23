import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Pokemon = ({ id, name, type, base_experience, side, isWinner, image }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`fut-card ${side} ${isWinner ? 'is-winner' : ''}`}>
      <div className="fut-inner">
        <div className="fut-top">
          <div className="fut-rating">{base_experience}</div>
          <div className="fut-pos">{type}</div>
        </div>
        
       <img src={image} alt={name} className="fut-img" />

        <div className="fut-name">{name}</div>
        <div className="fut-line" />

        <div className="fut-bar">
          <div className="fut-bar-fill" style={{ width: `${Math.min(base_experience / 3, 100)}%` }} />
        </div>
        <div className="fut-exp">EXP {base_experience}</div>
      </div>
    </div>
  )
}

export default Pokemon

Pokemon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  base_experience: PropTypes.number.isRequired,
  side: PropTypes.string,
  isWinner: PropTypes.bool,
  imagePrompt: PropTypes.string,
}