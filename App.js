import React, { Component } from 'react';
import './App.css';

// check if all 4 hole ids are the same
function checkLine(a,b,c,d) {
  return ((a !== null) && (a === b) && (a === c) && (a === d));
}

function Hole(props){
  // button hole in grid wrapped in styling
  return <div className="Hole"><div className={props.value}><button className="piece" /></div></div>
}

function Slat(props){
  // slat is an array of holes with key/value pairs
    return <div className="Slat" onClick={() => props.handleClick()}>
      {[...Array(props.holes.length)].map((x, j) => 
        <Hole key={j} value={props.holes[j]}></Hole>)}
      </div>
 }


// check winner by going through state of board
function checkWinner(bs) {
console.log(bs);
  for (let c = 0; c < 7; c++)
      for (let r = 0; r < 4; r++)
          if (checkLine(bs[c][r], bs[c][r+1], bs[c][r+2], bs[c][r+3]))
              return bs[c][r] + ' wins!'
  for (let r = 0; r < 6; r++)
       for (let c = 0; c < 4; c++)
           if (checkLine(bs[c][r], bs[c+1][r], bs[c+2][r], bs[c+3][r]))
               return bs[c][r] + ' wins!'
  return "";
}

class Grid extends Component {
  // constructor
  constructor() {
    super();
    // start with empty board and red starts
    this.state = {
      boardState: new Array(7).fill(new Array(6).fill(null)),
      playerTurn: 'Red',
      gameSelected: false,
      winner: '',
      remainingSquares: 42,
    }
  }

  // set up board after button is clicked
  selectedGame(){
    this.setState({
       gameSelected: true, 
       boardState: new Array(7).fill(new Array(6).fill(null)),
       remainingSquares: 42,
    })
  }

  
  makeMove(slatID){
    // create board copy
    const boardCopy = this.state.boardState.map(function(arr) {
      return arr.slice();
    });
    if (boardCopy[slatID].indexOf(null) !== -1) {
      // change hole color
      let newSlat = boardCopy[slatID].reverse()
      newSlat[newSlat.indexOf(null)] = this.state.playerTurn
      newSlat.reverse()
      // decrement holes
      const newRemaining = this.state.remainingSquares - 1;
      // switch turn and copy the new board
      this.setState({
        playerTurn: (this.state.playerTurn === 'Red') ? 'Yellow' : 'Red',
        boardState: boardCopy,
        remainingSquares: newRemaining,
      })
      console.log(this.state.remainingSquares)
    }
  }

  // make a move when there is no winner determined yet
  handleClick(slatID) {
    if(this.state.winner === ''){
      this.makeMove(slatID)
    }
  }
  
  // check for winner or no remaining squares
  componentDidUpdate(){
    // set winner state
    let winner = checkWinner(this.state.boardState)
    if(this.state.winner !== winner){
      this.setState({winner: winner})
    }
    //set winner to nobody
    if (this.state.remainingSquares===0) {
      alert("All holes are full");
      this.selectedGame();
    }
  }

  render(){
    // display winner message
    let winnerMessageStyle
    if(this.state.winner !== ""){
      winnerMessageStyle = "winnerMessage appear"
    } else {
      winnerMessageStyle = "winnerMessage"
    }

    // builds grid with slats
    let slats = [...Array(this.state.boardState.length)].map((x, i) => 
      <Slat 
          key={i}
          holes={this.state.boardState[i]}
          handleClick={() => this.handleClick(i)}
      ></Slat>
    )

    // returns the game board if button isclicked
    // return button if no game is selected or if there is a winner
    return (
      <div>
        {this.state.gameSelected &&
          <div className="Board">
            {slats}
          </div>
        }
        <div className={winnerMessageStyle}>{this.state.winner}</div>
        {(!this.state.gameSelected || this.state.winner !== '') &&
          <div>
            <button className="playButton" onClick={() => this.selectedGame()}>Play Game</button>
          </div>
        }
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Game">
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;