import React, { useState } from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import { shallowEqual, useSelector } from 'react-redux'

function Cell({color}) {
  return (
    <div className={`col ${color}`} />
  )
}

function App() {
  let board = useSelector(state => state.field)
  board = board.map((row, index) => (
    <div key={index} className="row">
      {row.map((color, index) => (
        <Cell key={index} color={color} />
      ))}
    </div>
  ))
  return (
    <>
      <div className="top">
        <div><Arrow/>{"Start here"}</div>
        <div>{"1/25"}<Reset/></div>
      </div>
      <div className="frame">
        <div className="board">
          {board}
        </div>
      </div>
    </>
  )
}

export default App;
