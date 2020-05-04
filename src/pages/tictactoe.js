import React, { useState } from 'react';

import Board from '../components/tictactoe/Board';
import HoverButton from '../components/tictactoe/HoverButton';

const TicTacToe = () => {
  const [rows, setRows] = useState(1);
  const [columns, setColumns] = useState(1);
  const [k, setK] = useState(1);

  const [gameStart, setGameStart] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const startGame = () => {
    if (k > rows && k > columns) {
      setErrorMsg('K cannot be greater than both Rows or Columns!');
      setError(true);
    } else {
      setErrorMsg('');
      setError(false);
      setGameStart(true);
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  };

  const inputStyle = {
    width: '8vmin',
    backgroundColor: 'beige',
    color: 'black',
    border: '1px solid black',
    padding: '1vmin',
    margin: '1vmin',
    textAlign: 'center',
  };

  const errorStyle = {
    borderWidth: '5px',
    borderStyle: 'dashed solid',
    borderColor: 'black',
    padding: '1vmin',
    color: 'lightred',
    backgroundColor: 'lightblue',
  };

  return (
    <div style={containerStyle}>
      {!gameStart &&
        <div>
          <span>Rows(M):</span>
          <input value={rows} style={inputStyle} type="number" min="1" placeholder="rows" onChange={(e) => setRows(parseInt(e.target.value))}/>
          <span>Columns(N):</span>
          <input value={columns} style={inputStyle} type="number" min="1" placeholder="columns" onChange={(e) => setColumns(parseInt(e.target.value))}/>
          <span>K:</span>
          <input value={k} style={inputStyle} type="number" min="1" placeholder="K" onChange={(e) => setK(parseInt(e.target.value))}/>
          <HoverButton title={`Start Game`} onClick={() => startGame()}/>
        </div>
      }
      {error && <div style={errorStyle}>{errorMsg}</div>}
      {gameStart && <Board rows={rows} columns={columns} k={k}/>}
      {gameStart && <div>M = {rows}| N = {columns} | K = {k}</div>}
      {gameStart && <HoverButton title={`Restart Game`} onClick={() => setGameStart(false)}/>}
    </div>
  );
};

export default TicTacToe;
