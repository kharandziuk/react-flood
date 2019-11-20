import React from 'react';
import arrow from './arrow.svg';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import './App.scss';
import _ from 'lodash';

function App() {
  const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red']

  //let cells = document.querySelectorAll('.col');

  //document.body.className = COLORS[Math.floor(Math.random() * COLORS.length)];

  //for (let cell of cells) {
  //  cell.classList.add(COLORS[Math.floor(Math.random() * COLORS.length)])
  //}
  //
  //TODO: make it general and proper size, and put random color here
  // you will probably need lodash range for it
  const cells = [0, 1, 2, 3, 4].map(() => (
    <div className="row">
      {
        [0, 1, 2, 3, 4].map(() => (
          <div className="col blue"></div>
        ))
      }
    </div>
  ))
  return (
<div>
  <div className="top">
    <div><Arrow/>{"Start here"}</div>
    <div>{"1/25"}<Reset/></div>
  </div>
  <div className="frame">
    <div className="board">
     {cells}
    </div>
  </div>
</div>
  )
}

export default App;
