import React from 'react'
import PropTypes from 'prop-types'

const O = props => {
  const { markSize } = props;

  const commonStyle = {
    borderRadius: '50%',
    position: 'absolute',
  };

  const outerStyle = {
    width: `${markSize}vmin`,
    height: `${markSize}vmin`,
    backgroundColor: 'black',
    ...commonStyle,
  };

  const innerStyle = {
    width: `${markSize*0.75}vmin`,
    height: `${markSize*0.75}vmin`,
    backgroundColor: 'white',
    ...commonStyle,
  };

  return (
    <>
      <div style={outerStyle}></div>
      <div style={innerStyle}></div>
    </>
  );
};

O.propTypes = {
  markSize: PropTypes.number.isRequired,
};

export default O;
