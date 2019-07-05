import React from 'react'
import Square from './Square'
import BoardRow from './BoardRow'
import calculateWinner from '../calculateWinner'
import {connect} from 'react-redux'
import {setSquare} from '../store'



class Board extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   squares: Array(9).fill(null),
    //   xIsNext: true,
    //   turn: 'X'
    // }
    this.renderSquare = this.renderSquare.bind(this)
  }

  handleClick(i) {
    const {squares,} = this.props
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    this.props.setSquare(i)
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.props.turn);
    }

    return (
      <div>
        <div className="status">{status}</div>
        <BoardRow squareNums={[0,1,2]} renderSquare={this.renderSquare}/>
        <BoardRow squareNums={[3,4,5]} renderSquare={this.renderSquare}/>
        <BoardRow squareNums={[6,7,8]} renderSquare={this.renderSquare}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    squares: state.squares,
    xIsNext: state.xIsNext,
    turn: state.turn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSquare: (idx) => {dispatch(setSquare(idx))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)