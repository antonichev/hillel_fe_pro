import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from './../utils';

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (idx) => {
    const boardClone = [...board];
    if (winner || boardClone[idx]) return null;

    boardClone[idx] = xIsNext ? 'X' : 'O';
    setXIsNext((prev) => !prev);

    setBoard(boardClone);
  };

  const clearBoard = () => {
    setBoard(Array(9).fill(null));
  };

  const newGame = () => {
    return (
      <button className='start-btn' onClick={clearBoard}>
        Start New Game
      </button>
    );
  };

  const condition = () => {
    if (winner) return `GAME OVER. ${winner} is winner!`;
    if (!board.includes(null)) return `GAME OVER. DRAW`;
    return `TURN: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className='wrapper'>
      {newGame()}
      <Board cells={board} click={handleClick} />
      <p className='turn'>{condition()}</p>
    </div>
  );
}
