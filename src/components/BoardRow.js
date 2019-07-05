import React from 'react'
// import Square from'./Square'


const BoardRow = (props) => {
  const { squareNums, renderSquare } = props
  return(
    <div className="board-row">
      {
        squareNums.map(num => (
          renderSquare(num)
        ))
      }
    </div>
  )
}

export default BoardRow