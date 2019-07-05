import React from 'react'
import {clearBoard} from '../store'
import {connect} from 'react-redux'

const ClearBoardButton = (props) => {
  return(
    <button onClick={props.clearBoard}>Play Again</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearBoard: () => dispatch(clearBoard())
  }
}

export default connect(null, mapDispatchToProps)(ClearBoardButton)