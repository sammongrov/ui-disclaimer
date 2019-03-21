import React from 'react';
import PropTypes from 'prop-types';

const Disclaimer = ({ Layout, content, onAccept, safeBgColors }) => (
  <Layout content={content} safeBgColors={safeBgColors} onAccept={() => onAccept()} />
);

Disclaimer.propTypes = {
  Layout: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  safeBgColors: PropTypes.array,
};

Disclaimer.defaultProps = {
  safeBgColors: [],
};

export default Disclaimer;
