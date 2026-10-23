import React from 'react'
import PropTypes from 'prop-types';

const Desert = ({ children }) => {
  return (
    <div className="desert">
      <div className="sun" />
      <div className="sand" />
      <div className="dune dune1" />
      <div className="dune dune2" />

      <div className="arena">{children}</div>
    </div>
  )
}

export default Desert

Desert.propTypes = {
  children: PropTypes.node,
}