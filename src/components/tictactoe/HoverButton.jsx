import React, { useState } from 'react';
import PropTypes from 'prop-types';

const HoverButton = props => {
  const { title, onClick } = props;
  const [buttonHover, setButtonHover] = useState(false);

  const buttonNormalStyle = {
    width: '20vmin',
    border: '1px solid black',
    padding: '1vmin',
  };

  const buttonHoverStyle = {
    ...buttonNormalStyle,
    backgroundColor: 'lightblue',
    cursor: 'pointer',
  };

  const buttonStyle = buttonHover ? buttonHoverStyle : buttonNormalStyle;

  return <button onClick={onClick} style={buttonStyle} onMouseEnter={() => setButtonHover(true)} onMouseLeave={() => setButtonHover(false)}>{title}</button>;
};

HoverButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HoverButton;
