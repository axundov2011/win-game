import React from 'react'
import PropTypes from 'prop-types';
const Title = ({ text }) => {
    return <h2 className="h5 text-primary border-bottom pb-2 mb-3">{text}</h2>;
}


Title.PropTypes = {
    text: PropTypes.string.isRequired,
}


export default Title
