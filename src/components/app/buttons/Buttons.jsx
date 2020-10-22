import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onChange }) => (
  <div 
    onChange={onChange}
  >
    <input type="radio" value="GET" name="get">GET</input>
    <input type="radio" value="POST" name="post">GET</input>
    <input type="radio" value="PUT" name="put">GET</input>
    <input type="radio" value="DELETE" name="delete">GET</input>
    <textarea name="data" onChange={onChange} />
  </div>
);

Buttons.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Buttons;
