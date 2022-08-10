import React from 'react';
import Cell from './Cell';

export default function Board({ cells, click }) {
  return (
    <div className='board'>
      {cells.map((cell, idx) => (
        <Cell key={idx} value={cell} onClick={click.bind(null, idx)} />
      ))}
    </div>
  );
}
