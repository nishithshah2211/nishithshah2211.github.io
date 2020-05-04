import React from 'react';
import { times } from 'lodash';
import PropTypes from 'prop-types';

import Cell from './Cell';

const Row = props => {
  const {
    columns,
    rowIndex,
    cellSize,
    X_Player,
    O_Player,
    playerTurn,
  } = props;

  const style = {
    display: 'flex',
    flexDirection: 'row',
  };

  const cellProps = {
    cellSize,
    X_Player,
    O_Player,
    playerTurn,
  };

  return (
    <div style={style}>
      {times(columns, (columnNum) => <Cell {...cellProps} key={columnNum} cellNum={rowIndex*columns + columnNum}/>)}
    </div>
  );
};

Row.propTypes = {
  columns: PropTypes.number.isRequired,
  // key: PropTypes.number.isRequired,
  rowIndex: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  X_Player: PropTypes.string.isRequired,
  O_Player: PropTypes.string.isRequired,
  playerTurn: PropTypes.func.isRequired,
};

export default Row;
