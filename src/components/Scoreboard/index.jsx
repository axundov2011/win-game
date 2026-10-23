import React from 'react'
import PropTypes from 'prop-types';

const Scoreboard = ({ name1, name2, exp1, exp2 }) => {
  return (
    <div className="scoreboard">
      <span className="sb-name">{name1}</span>
      <span className="sb-score">{exp1} : {exp2}</span>
      <span className="sb-name">{name2}</span>
    </div>
  )
}

export default Scoreboard

Scoreboard.propTypes = {
  name1: PropTypes.string.isRequired,
  name2: PropTypes.string.isRequired,
  exp1: PropTypes.number.isRequired,
  exp2: PropTypes.number.isRequired,
}