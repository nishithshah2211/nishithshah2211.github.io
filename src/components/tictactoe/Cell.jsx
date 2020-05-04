import React, { useState } from 'react';
import PropTypes from 'prop-types';

import X from './X';
import O from './O';

const Cell = props => {
  const {
    cellNum,
    cellSize,
    X_Player,
    O_Player,
    playerTurn
  } = props;

  const [mark, setMark] = useState(null);
  // const [cellNum] = useState(cellNo);
  
  const markSize = 0.85*cellSize;

  const [hover, setHover] = useState(false);
  
  const normalStyle = {
    border: '1px solid black',
    height: `${cellSize}vmin`,
    width: `${cellSize}vmin`,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  
  const hoverStyle = {
    ...normalStyle,
    backgroundColor: 'lightblue',
    cursor: 'pointer',
  };

  const style = hover ? hoverStyle : normalStyle;

  if (mark === null) {
    return <div role="button" tabIndex="-1" style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => playerTurn(cellNum, setMark)}/>;
  } else {
    return (
      <div role="button" tabIndex="-1" style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {mark === X_Player && <X markSize={markSize}/>}
        {mark === O_Player && <O markSize={markSize}/>}
      </div>
    );
  }
};

Cell.propTypes = {
  cellNum: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  X_Player: PropTypes.string.isRequired,
  O_Player: PropTypes.string.isRequired,
  playerTurn: PropTypes.func.isRequired,
};

export default Cell;
