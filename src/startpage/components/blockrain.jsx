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
    dropArr: [], // each piece will be obj with{x: y: color:}
  };
  componentDidMount() {
    for (let i = 0; i < 40; i++) {
      this.place();
      this.drop();
    }
  }

  render() {
    const array = [];
    for (let i = 0; i <= this.state.rows; i++) {
      array.push(
        <div className="row" key={i}>
          {this.inputCells(i)}
        </div>
      );
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
    // pick random spot to place tetrimino
    const placeHere = this.find(tetrimino.cordinates);

    //update board to show that there will be a tetrimino dropping to the placeHere location
    for (let i = 0; i < tetrimino.cordinates.length; i++) {}

    // create data to place into dropArr so that it will drop and paint this tetrimino while tetrimino is moving on board.
    const dropRefrence = [];
    for (let i = 0; i < tetrimino.cordinates.length; i++) {
      const x = tetrimino.cordinates[i][0];
      const y = tetrimino.cordinates[i][1];
      //update board with final resting location of tetrmino
      this.state.board[x + placeHere[0]][y + placeHere[1]] = -1;
      // console.log(x + placeHere[0], x + placeHere[1]);
      dropRefrence.push([x, y + placeHere[1]]);
    }
    dropRefrence.push(tetrimino.color);
    dropRefrence.push(placeHere);
    // push to dropArr
    this.state.dropArr.push(dropRefrence);
    // console.log(this.state.dropArr);
    // console.log(this.state.board);
  }

  find(cordinates) {
    const { board } = this.state;
    // find available locations
    // find open spots for tetrimino
    for (let x = board.length - 1; x > 0; x--) {
      const array = [];
      // stop board if no spots available to place piece
      if (x === 1) return this.stop(); // might need to adjust 1
      for (let y = 0; y < board[x].length; y++) {
        let freeSpace = true;
        if (board[x][y] === 0) {
          freeSpace = true;
          // looping over cordinates of tetrimino to see if it will fit
          for (let z = 1; z < cordinates.length; z++) {
            if (board[x + cordinates[z][0]][y + cordinates[z][1]] !== 0) {
              // console.log("xy", x, y);
              freeSpace = false;
            }
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
    const { board } = this.state;
    const { dropArr } = this.state;
    // add 1 to x to drop piece
    for (let i = 0; i < dropArr.length; i++) {
      if (dropArr[i][0][0] === dropArr[i][5][0]) {
        // -2
        for (let j = 0; j < 4; j++) {
          const xx = dropArr[i][j][0];
          const yy = dropArr[i][j][1];
          board[xx][yy] = -2;
        }
        dropArr.shift(); // shift CHECK d
        console.log("dropArr:", dropArr);
      }
      //access x
      for (let x = 0; x < 4; x++) {
        // console.log("drop Arr 1", dropArr[i][x]);
        dropArr[i][x][0] = dropArr[i][x][0] + 1;
        // console.log("drop Arr 2", dropArr[i][x]);
      }
      // dropArr[i][0];
      // console.log("dropArr:", dropArr);
      // console.log("dropArr spot:", dropArr[i][0][0]);
    }
    console.log("this.board = : ", board);
    // loop ..
    // if first === last turn this.state.board(at [0]) ---> -2 and all other spots, and unshift the array. it should always be the first element.

    // take 1 from x

    //Order: drop, paint, check for matching key values and delete those.
    // use map to update all values
    // if y is negative skip paint.
    // update dom based on x's and y's of each property in object
    //add 1 to all x's and check for piece keys and value cordinates matching.
    // if match change matrice to -2 and trigger rowComplete()?
    // delete from arr
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
