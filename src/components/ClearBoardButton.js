import React from 'react'
import {connect} from 'react-redux'
import {clearBoard} from '../store'

const ClearBoardButton = (props) => {
  return(
    <button onClick={props.clearBoard}>RESET BOARD</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearBoard: () => {
      dispatch(clearBoard())
    }
  }
}

export default connect(null, mapDispatchToProps)(ClearBoardButton)