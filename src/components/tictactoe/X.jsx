import React from 'react'
import PropTypes from 'prop-types'

const X = props => {
  const { markSize } = props;

  const style = {
    width: `${markSize*0.15}vmin`,
    height: `${markSize}vmin`,
    backgroundColor: 'black',
    position: 'absolute',
  };

  const leftStyle = {
    ...style,
    transform: 'rotate(45deg)',
  };

  const rightStyle = {
    ...style,
    transform: 'rotate(-45deg)',
  };

  return (
    <>
      <div style={leftStyle}></div>
      <div style={rightStyle}></div>
    </>
  );
};

X.propTypes = {
  markSize: PropTypes.number.isRequired,
};

export default X;
