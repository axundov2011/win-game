import React from 'react'
import PropTypes from "prop-types";

const WelcomeMessage = ({message= "Welcome to our Website!"}) => {
  return  <div className="alert alert-success">{message}</div>
}


WelcomeMessage.propTypes = {
  message: PropTypes.string,
};
export default WelcomeMessage
