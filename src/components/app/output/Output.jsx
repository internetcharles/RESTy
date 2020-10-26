import React from 'react';
import PropTypes from 'prop-types';

const Output = ({ results }) => (
  <figure>
    <span>{results}</span>  
  </figure>
);

Output.propTypes = {
  results: PropTypes.string.isRequired
};

export default Output;
