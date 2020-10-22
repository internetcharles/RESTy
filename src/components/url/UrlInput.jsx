import React from 'react';
import PropTypes from 'prop-types';

const UrlInput = ({ onChange, onClick }) => (
  <>
    <label htmlFor="url" />
    <input
      id="url"
      type="text"
      onChange={onChange}
      placeholder="http://api.url.here"
    />
    <button onClick={onClick}>
        GO!
    </button>
  </>
);

UrlInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default UrlInput;
