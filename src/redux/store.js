import { createStore } from "redux";


const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red']
const SIZE = 16

function randomNum(max) {
  return Math.floor(Math.random() * max)
}

const field = new Array(SIZE)
  .fill(0)
  .map(_ => new Array(SIZE).fill(0).map(_ => COLORS[randomNum(COLORS.length)]))

const initialState = {
  field
};

const rootReducer = function(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case "flood":
      alert(action.color)
      // TODO: you need to call flood function here
      return state
    default:
      return state
  }
}

export default createStore(rootReducer);
