import React from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share';

function Cell({color, onClick}) {
  return (
    <div className={`col ${color}`} onClick={onClick} />
  )
}

const Modal = ({result}) => {
  return (<div id="open-modal" className="modal-window">
    <div>
      {`You result is ${result}/25`}
      <FacebookShareButton
      url={"http://flood-game.s3-website.eu-central-1.amazonaws.com/"}>
        <FacebookIcon round={true} />
        <TwitterIcon round={true} />
      </FacebookShareButton>
    </div>
  </div>)
}

function App() {
  let board = useSelector(state => state.field)
  let counter = useSelector(state => state.counter)
  let isWin = useSelector(state => state.isWin)
  let currentColor = useSelector(state => state.currentColor)
  const modal = isWin ?  <Modal result={counter} /> : null
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
      {modal}
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
