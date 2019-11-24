import React from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import { useSelector, useDispatch } from 'react-redux'

function Cell({color, onClick}) {
  return (
    <div className={`col ${color}`} onClick={onClick} />
  )
}

function App() {
  let board = useSelector(state => state.field)
  let counter = useSelector(state => state.counter)
  let currentColor = useSelector(state => state.currentColor)
  const dispatch = useDispatch()
  document.body.className = currentColor
  board = board.map((row, index) => (
    <div key={index} className="row">
      {row.map((color, index) => (
        <Cell key={index} color={color}
          onClick={() => dispatch({type: "flood", color}) } />
      ))}
    </div>
  ))
  return (
    <>
      <div className="top">
        <div><Arrow/>{"Start here"}</div>
        <div>{`${counter + 1}/25`}<Reset onClick={()=> dispatch({type: "reset"})}/></div>
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
