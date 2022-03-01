import React, { Component } from "react";
// import Row from "./rows";
import "./styles/blockrain.css";
import { tetriminos } from "./scripts/tetriminos";

class Blockrain extends Component {
  state = {
    rows: 32, // make dynamic based on the screen size
    cells: 65,
    blockSize: 30,
    board: this.createBoard(),
    dropObj: {},
  };
  componentDidMount() {
    this.place();
  }

  render() {
    // console.log("my board", this.state.board);
    // console.log(tetriminos);
    const array = [];
    for (let i = 0; i <= this.state.rows; i++) {
      array.push(<div className="row">{this.inputCells(i)}</div>);
    }

    return <div className="canvas">{array.map((row) => row)}</div>;
  }

  inputCells(row) {
    const array = [];
    for (let i = 0; i <= this.state.cells; i++) {
      const id = row.toString() + i;
      array.push(<div className="cell" id={id} key={id} />);
    }
    return array;
  }

  createBoard() {
    // need to replace length with state property rows. and Array(65) with cells. hardcoded for now
    const board = Array.from(
      { length: 32 },
      () => Array(65).fill(0) //fill board with 0s,
    );
    return board;
  }

  place() {
    // pick a random tetrimino
    const tetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];
    // pick spot to place tetrimino
    const placeHere = this.find(tetrimino.length, tetrimino.cordinates);
    console.log("placeHere:", placeHere);

    // grab tetrimino object at that location(cant just be a refrence). will go into dropObj with the appropriate amount added to y for right location.

    // add appropriate amount to y to hit top location
    // update matrice with -1 at final spot ()
    // place into dropObj with key of resting location
  }

  find(tetriminoLength, cordinates) {
    const { board } = this.state;
    console.log(board);
    // find available locations
    // find open spots for tetrimino
    for (let x = board.length - 1; x > 0; x--) {
      const array = [];
      // stop board if no spots available to place piece
      if (x === 1) return this.stop(); // might need to adjust 1
      for (let y = 0; y < board[x].length; y++) {
        let b = board[x][y];
        if (b === 0) {
          let freeSpace = true;
          console.log(cordinates.length);
          for (let z = 1; z < cordinates.length; z++) {
            // if (board[x + cordinates[0]][y + cordinates[1]] !== 0)
            //   freeSpace = false;
          }
          if (freeSpace) {
            array.push([x, y]);
          }
        }
      }
      // if found a spot return a random spot to place tetrimino.
      if (array.length > 0)
        return array[Math.floor(Math.random() * array.length)];
    }
  }

  drop() {
    //Order: drop, paint, check for matching key values and delete those.
    // update dom based on x's and y's of each property in object
    //add 1 to all x's and check for piece keys and value cordinates matching.
    // if match change matrice to -2 and trigger rowComplete()?
  }

  paint() {
    // iterate over obj. enteries (this.state.board)
    //if( ignore any negative x values
    // id will equal the concatination of x and y
    // color will equal color prop
  }

  rowComplete() {
    // need to plan... proabably need to splice matrice but also adjust x values for dropping pieces #tricky and might be skipped for time
  }

  stop() {
    console.log("full board");
  }
}

export default Blockrain;

// * amount of rows
