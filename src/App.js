import React from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import './App.scss';
import Cell from './components/Cell';
// import _ from 'lodash';

function App() {
  const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red'];
  const SIZE = 14;
  const matrix = new Array(SIZE)
  .fill(0)
  .map(_ => new Array(SIZE).fill(0).map(_ => randomNum(COLORS.length)))

  function randomNum(max) {
    return Math.floor(Math.random() * max)
  }

  return (
    <div>
      <div className="top">
        <div><Arrow/>{"Start here"}</div>
        <div>{"1/25"}<Reset/></div>
      </div>
      <div className="frame">
        <div className="board">
          {matrix.map((row, index) => (
            <div key={index} className="row">
              {row.map((value, index) => (
                <Cell key={index} className={COLORS[value]} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
