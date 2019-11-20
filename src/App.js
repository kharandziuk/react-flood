import React from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import './App.scss';
import _ from 'lodash';

function App() {
  const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red']

  const N = 25
  const cells = _.range(N).map(() => (
    <div className="row">
      {
        _.range(N).map(() => {
          const color = COLORS[Math.floor(Math.random() * COLORS.length)]
          return (<div className={`col ${color}`}></div>)
        })
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
