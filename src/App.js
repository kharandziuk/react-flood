import React, { useState } from 'react';
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Reset } from './reset.svg'
import { shallowEqual, useSelector } from 'react-redux'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon
} from 'react-share';

function Cell({color}) {
  return (
    <div className={`col ${color}`} />
  )
}

const Modal = () => {
  return (<div id="open-modal" className="modal-window">
    <div>
      You result is 25/25
      <FacebookShareButton
      url={"http://HERE_SHOULD_BEPROPPER_ONE.s3-website.eu-central-1.amazonaws.com/"}>
        <FacebookIcon round={true} />
        <TwitterIcon round={true} />
      </FacebookShareButton>
    </div>
  </div>)
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
      <Modal/>
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
