import React from 'react'
import PropTypes from "prop-types";

const Greeting  = () => {
  return (
    <h3 className='text-primary'>
      Hello, {name}!
    </h3>
  )
}


Greeting.PropTypes = {
    name: PropTypes.string.isRequired,
}
export default Greeting 
