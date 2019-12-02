import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';

function Modal({isDone}) {
  let counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
  <div className="modal" hidden={!isDone}>
    <div className="modal-content">
      <h3>You result is {counter} / 25. Share it!</h3>
      <div>
        <FacebookShareButton
        url={"http://HERE_SHOULD_BEPROPPER_ONE.s3-website.eu-central-1.amazonaws.com/"}>
          <FacebookIcon round={true} />
        </FacebookShareButton>
      </div>
      <button className="btn" onClick={()=> dispatch({type: "reset"})}>Play again</button>
    </div>
  </div>
  )
}

export default Modal;
