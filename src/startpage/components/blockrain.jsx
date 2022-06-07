import React, { Component, useState, useEffect } from "react";
// import Row from "./rows";R
import "./styles/blockrain.css";
import { tetriminos } from "./scripts/tetriminos";
import useWindowSize from "./util/useWindowSize";

const array = []
let dropArr = []
let restingArr = []
let end = false


const Blockrain = () => {
  const [rows, setRows] = useState(31) //todo: set based on window size
  const [cells, setCells] = useState(66) //todo: set based on window size
  // const [board, setBoard] = useState(createBoard)
  console.log('board', board)

  // Create Dom elements for rows and cells
  for (let i = 0; i <= rows - 1; i++) {
    array.push(
      <div className={`row`} key={"r" + i}>
        {inputCells(i, cells, board)}
      </div>
    );
  }

  return (
    <>
      <div className="canvas">
        {array}
        {/* {array.map((row) => row)} */}
      </div>
    </>
  )
}

// Create Matricie
const createBoard = () => {
  //* need to replace length with state property rows. and Array(65) with cells. hardcoded for now
  const board = Array.from(
    { length: 31 },
    () => Array(66).fill(0) //fill board with 0s,
  );
  return board;
}


const board = createBoard()


// Create Dom elements for each cell
const inputCells = (row, cells, board) => {
  const cellArray = [];
  for (let i = 0; i <= cells - 1; i++) {
    const id = row.toString() + i;
    // const id = `${row}${i}`;
    const cellColorClass = `_${row}${i}`;
    const allClasses = `cell ${cellColorClass}`;
    cellArray.push(<div className={allClasses} key={id} />);
  }
  return cellArray;
}




// * Place tetrimino

const place = () => {
  // pick a random tetrimino
  const tetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];
  // pick random spot to place tetrimino
  const placeHere = find(tetrimino.cordinates);
  // create data to place into dropArr so that it will drop and paint this tetrimino while tetrimino is moving on board.
  const dropRefrence = [];
  for (let i = 0; i < tetrimino.cordinates.length; i++) {
    const x = tetrimino.cordinates[i][0];
    const y = tetrimino.cordinates[i][1];

    dropRefrence.push([x, y + placeHere[1]]);
  }
  dropRefrence.push(tetrimino.color);
  dropRefrence.push(placeHere);
  // push to dropArr
  dropArr.push(dropRefrence);
}


const find = (cordinates) => {
  const { board } = this.state;
  // find open spots for tetrimino
  for (let x = board.length - 1; x > 0; x--) {
    const array = [];
    // stop board if no spots available to place piece
    if (x === 1) return this.handleStop(); // *might need to adjust 1

    for (let y = 0; y < board[x].length; y++) {
      let freeSpace = true;
      if (board[x][y] === 0) {
        // looping over cordinates of tetrimino to see if it will fit
        for (let z = 1; z < cordinates.length; z++) {
          if (board[x + cordinates[z][0]][y + cordinates[z][1]] !== 0) {
            freeSpace = false;
            break;
          }
          //* check to see if space is open above it
          // if (board[x - 1 + cordinates[z][0]][y + cordinates[z][1]] !== 0) {
          //   // console.log("xy", x, y);
          //   freeSpace = false;
          //   //* add continue statement here
          // }
        }
        if (freeSpace) {
          array.push([x, y]);
        }
      }
    }
    // if found a spot return a random spot to place tetrimino.

    if (array.length > 0) {
      return array[Math.floor(Math.random() * array.length)];
    }
  }
}


/*

class Blockrain extends Component {
  state = {
    rows: 31, // * make dynamic based on the screen size
    cells: 66,
    blockSize: 30,
    board: this.createBoard(),
    dropArr: [],
    restingArr: [],
    end: false,
  };
  componentDidMount() {
    this.loop();
  }

  render() {
    const array = [];
    for (let i = 0; i <= this.state.rows - 1; i++) {
      array.push(
        <div className="row" key={i}>
          {this.inputCells(i)}
        </div>
      );
    }

    return <div className="canvas">{array.map((row) => row)}</div>;
  }

  loop() {
    if (!this.state.end) {
      let placePiece = setInterval(() => {
        this.place();
      }, 2000);
      let dropLoop = setInterval(() => {
        this.drop();
        this.handlePaint();
      }, 50);
    }
  }

  handlePaint() {
    const { dropArr } = this.state;
    const { restingArr } = this.state;

    const board = this.createBoard();
    for (let i = 0; i < restingArr.length; i++) {
      for (let j = 0; j < 4; j++) {
        board[restingArr[i][j][0]][restingArr[i][j][1]] = restingArr[i][4];
      }
    }

    for (let i = 0; i < dropArr.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (dropArr[i][j][0] >= 0) {
          board[dropArr[i][j][0]][dropArr[i][j][1]] = dropArr[i][4];
        }
      }
    }

    this.setState({ board });
  }

  inputCells(row) {
    const array = [];
    for (let i = 0; i <= this.state.cells - 1; i++) {
      const id = row.toString() + i;
      const cellColorClass = "_" + Math.abs(this.state.board[row][i]);
      const allClasses = `cell ${cellColorClass}`;
      array.push(<div className={allClasses} key={id} />);
    }
    return array;
  }

  createBoard() {
    //* need to replace length with state property rows. and Array(65) with cells. hardcoded for now
    const board = Array.from(
      { length: 31 },
      () => Array(66).fill(0) //fill board with 0s,
    );
    return board;
  }

  place() {
    // pick a random tetrimino
    const tetrimino = tetriminos[Math.floor(Math.random() * tetriminos.length)];
    // pick random spot to place tetrimino
    const placeHere = this.find(tetrimino.cordinates);
    // create data to place into dropArr so that it will drop and paint this tetrimino while tetrimino is moving on board.
    const dropRefrence = [];
    for (let i = 0; i < tetrimino.cordinates.length; i++) {
      const x = tetrimino.cordinates[i][0];
      const y = tetrimino.cordinates[i][1];

      dropRefrence.push([x, y + placeHere[1]]);
    }
    dropRefrence.push(tetrimino.color);
    dropRefrence.push(placeHere);
    // push to dropArr
    this.state.dropArr.push(dropRefrence);
  }

  find(cordinates) {
    const { board } = this.state;
    // find open spots for tetrimino
    for (let x = board.length - 1; x > 0; x--) {
      const array = [];
      // stop board if no spots available to place piece
      if (x === 1) return this.handleStop(); // *might need to adjust 1

      for (let y = 0; y < board[x].length; y++) {
        let freeSpace = true;
        if (board[x][y] === 0) {
          // looping over cordinates of tetrimino to see if it will fit
          for (let z = 1; z < cordinates.length; z++) {
            if (board[x + cordinates[z][0]][y + cordinates[z][1]] !== 0) {
              freeSpace = false;
              break;
            }
            //* check to see if space is open above it
            // if (board[x - 1 + cordinates[z][0]][y + cordinates[z][1]] !== 0) {
            //   // console.log("xy", x, y);
            //   freeSpace = false;
            //   //* add continue statement here
            // }
          }
          if (freeSpace) {
            array.push([x, y]);
          }
        }
      }
      // if found a spot return a random spot to place tetrimino.

      if (array.length > 0) {
        return array[Math.floor(Math.random() * array.length)];
      }
    }
  }

  drop() {
    const { board } = this.state;
    const { dropArr } = this.state;
    const { restingArr } = this.state;

    // add 1 to x to drop piece
    for (let i = 0; i < dropArr.length; i++) {
      // if at resting spot
      if (dropArr[i][0][0] === dropArr[i][5][0]) {
        const restingSpot = dropArr.shift(); // shift CHECK d

        restingSpot[4] = -Math.abs(restingSpot[4]);
        restingArr.push(restingSpot);
      }
      // * need to change logic ---->

      for (let x = 0; x < 4; x++) {
        dropArr[i][x][0] = dropArr[i][x][0] + 1;
      }
    }
  }

  rowComplete() {
    // need to plan... proabably need to splice matrice but also adjust x values for dropping pieces #tricky and might be skipped for time
  }

  handleStop() {
    this.setState({ end: true });
  }
}
*/

export default Blockrain;
