import React from 'react'
import Board from './Board'
import ClearBoardButton from './ClearBoardButton'

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <ClearBoardButton/>
      </div>
    );
  }
}

export default Game

