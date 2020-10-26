import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ onChange, onTextChange }) => (
  <div>
    <form onChange={onChange}>
      <input type="radio" value="GET" name="api" /> GET
      <input type="radio" value="POST" name="api" /> POST
      <input type="radio" value="PUT" name="api" /> PUT
      <input type="radio" value="DELETE" name="api" /> DELETE
    </form>
    <textarea name="data" onChange={onTextChange} />
  </div>
);

Buttons.propTypes = {
  onChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired
};

export default Buttons;
