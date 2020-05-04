import React, { useState } from 'react';
import { times } from 'lodash';
import PropTypes from 'prop-types';
import range from 'lodash/range';

import Row from './Row';

const X_Player = 'x';
const O_Player = 'o';

const Board = props => {
  const { rows, columns, k } = props;
  const cellSize = Math.min(80/rows, 80/columns);
  const [gameState, setGameState] = useState({
    board: new Array(rows*columns).fill(''),
    turn: X_Player,
    win: null,
    draw: false,
  });

  const X_Winning = X_Player.repeat(k);
  const O_Winning = O_Player.repeat(k);

  const checkForWin = (cellNum) => {
    const winningString = gameState.turn === X_Player ? X_Winning : O_Winning;
    const row = Math.floor(cellNum/columns);
    const column = Math.floor(cellNum % columns);

    // Check row - leftBound inclusive, rightBound non-inclusive
    const leftBound = Math.max(0, column - k + 1);
    const rightBound = Math.min(columns, column + k);
    const rowWin = range(leftBound, rightBound).map((column) => gameState.board[row*columns + column]).join('').indexOf(winningString) !== -1;
    
    // Check column
    const topBound = Math.max(0, row - k + 1);
    const bottomBound = Math.min(rows, row + k);
    const columnWin = range(topBound, bottomBound).map((row) => gameState.board[row*columns + column]).join('').indexOf(winningString) !== -1;

    // Check left diagonal
    const topLeft = [];
    for (let i = row-1, j = column-1, step=0; i >= 0 && j >= 0 && step < k-1; step++, i--, j--) {
      topLeft.push([i, j]);
    }
    const bottomRight = [];
    for (let i = row+1, j = column+1, step=0; i < rows && j < columns && step < k-1; step++, i++, j++) {
      bottomRight.push([i, j]);
    }

    const leftDiagonalWin = [ ...topLeft.reverse(), [row, column], ...bottomRight ].map((coords) => gameState.board[coords[0]*columns + coords[1]]).join('').indexOf(winningString) !== -1;

    // Check right diagonal
    const topRight = [];
    for (let i = row-1, j = column+1, step=0; i >= 0 && j < columns && step < k-1; step++, i--, j++) {
      topRight.push([i, j]);
    }
    const bottomLeft = [];
    for (let i = row+1, j = column-1, step=0; i < rows && j >= 0 && step < k-1; step++, i++, j--) {
      bottomLeft.push([i, j]);
    }

    const rightDiagonalWin = [ ...bottomLeft.reverse(), [row, column], ...topRight ].map((coords) => gameState.board[coords[0]*columns + coords[1]]).join('').indexOf(winningString) !== -1;

    return rowWin || columnWin || leftDiagonalWin || rightDiagonalWin;
  };

  const checkForDraw = () => {
    return gameState.board.map((mark) => mark === X_Player || mark === O_Player).every(Boolean);
  };

  const playerTurn = (cellNum, setMark) => {
    if (gameState.draw || gameState.win !== null) return;

    // Set mark from current turn
    const { board, turn } = gameState;
    board[cellNum] = turn;
    setGameState((prevGameState) => ({ ...prevGameState, board }));
    setMark(turn);

    // Evaluate game state - win or draw?
    const win = checkForWin(cellNum);
    if (win) {
      setGameState((prevGameState) => ({ ...prevGameState, win: turn }));
    } else if (checkForDraw()) {
      setGameState((prevGameState) => ({ ...prevGameState, draw: true }));
    } else {
      // Switch turn and continue
      const nextTurn = turn === X_Player ? O_Player : X_Player;
      setGameState((prevGameState) => ({ ...prevGameState, turn: nextTurn }));
    }
  };

  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const rowProps = {
    columns,
    cellSize,
    gameState,
    setGameState,
    X_Player,
    O_Player,
    playerTurn,
  };

  return (
    <div style={style}>
      {times(rows, (rowNum) => <Row {...rowProps} key={rowNum} rowIndex={rowNum}/>)}
      {!gameState.draw && gameState.win === null && <div>Player {gameState.turn.toUpperCase()} to Play!</div>}
      {gameState.draw && <div>Draw Game!</div>}
      {gameState.win !== null && <div>Player {gameState.win.toUpperCase()} wins!</div>}
    </div>
  );
};

Board.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  k: PropTypes.number.isRequired,
};

export default Board;
