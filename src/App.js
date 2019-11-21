import React, { useState } from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import Cell from './components/Cell';

function App() {

  const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red'];
  const SIZE = 14;
  
  function randomNum(max) {
    return Math.floor(Math.random() * max)
  }

  const initial = new Array(SIZE)
  .fill(0)
  .map(_ => new Array(SIZE).fill(0).map(_ => randomNum(COLORS.length)))

  const [board, changeBoard] = useState(initial);

  return (
    <>
      <div className="top">
        <div><Arrow/>{"Start here"}</div>
        <div>{"1/25"}<Reset/></div>
      </div>
      <div className="frame">
        <div className="board">
          {board.map((row, index) => (
            <div key={index} className="row">
              {row.map((value, index) => (
                <Cell key={index} color={COLORS[value]} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
