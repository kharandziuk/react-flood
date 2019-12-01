import { createStore } from "redux";
import { flood } from '../utils'

const COLORS = ['yellow', 'green', 'blue', 'violet', 'pink', 'red']
const SIZE = 15

function randomNum(max) {
  return Math.floor(Math.random() * max)
}

const getField = () => new Array(SIZE)
  .fill(0)
  .map(_ => new Array(SIZE).fill(0).map(_ => COLORS[randomNum(COLORS.length)]))

const isFlooded = (field) => {
  const color = field[0][0]
  for(let row of field) {
    for(let cell of row) {
      if (cell !== color) {
        return false
      }
    }
  }
  return true
}

const getInitialState = () => {
  const field = getField()
  return {
    field,
    counter: 0,
    currentColor: field[0][0],
    isWin: false
  }
}


const rootReducer = function(state = getInitialState(), action) {
  switch(action.type) {
    case "flood":
      if (state.isWin || state.currentColor === action.color) {
        return state
      }
      state.field = flood(state.field, action.color)
      state.counter = state.counter + 1
      state.currentColor = action.color
      state.isWin = isFlooded(state.field)
      return state
    case "reset":
      state = getInitialState()
      return state
    default:
      return state
  }
}

export default createStore(rootReducer);
