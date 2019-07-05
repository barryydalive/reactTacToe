import { createStore, applyMiddleware, } from 'redux'
import loggerMiddleware from 'redux-logger'

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  turn: 'X'
}

const SET_SQUARE = 'SET_SQUARE'
const CLEAR_BOARD = 'CLEAR_BOARD'

export const setSquare = (squareIdx) => {
  return {
    type:SET_SQUARE,
    squareIdx
  }
}

export const clearBoard = () => {
  return{
    type: CLEAR_BOARD
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_SQUARE:
      const squares = state.squares.slice()
      squares[action.squareIdx] = state.turn
      const nextTurn = state.xIsNext ? '0' : 'X'
      return {
        ...state, xIsNext: !state.xIsNext, turn:nextTurn, squares
      }
    case CLEAR_BOARD:
      return initialState
    default:
      return state
  }
}

export default createStore(reducer, applyMiddleware(loggerMiddleware))