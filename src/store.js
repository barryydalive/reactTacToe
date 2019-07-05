import {createStore, applyMiddleware} from 'redux'
import loggerMiddleWare from 'redux-logger'

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  turn: 'X'
}

//Action Types
const SET_SQUARE = 'SET_SQUARE'
const CLEAR_BOARD = 'CLEAR_BOARD'

//Action Creators
export const setSquare = (idx) => {
  return {
    type: SET_SQUARE,
    idx
  }
}
export const clearBoard = () => {
  return{
    type:CLEAR_BOARD
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case SET_SQUARE:
      const nextTurn = state.xIsNext? 'O' : 'X'
      const squares = state.squares.slice()
      squares[action.idx] = state.turn
      return {
        ...state, xIsNext: !state.xIsNext, turn: nextTurn, squares
      }
    case CLEAR_BOARD:
      return initialState
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleWare))

export default store