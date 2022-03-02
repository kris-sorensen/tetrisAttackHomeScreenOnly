import React, { Component } from "react";
// import Row from "./rows";
import "./styles/blockrain.css";
import { tetriminos } from "./scripts/tetriminos";

class Blockrain extends Component {
  state = {
    rows: 32, // * make dynamic based on the screen size
    cells: 65,
    blockSize: 30,
    board: this.createBoard(),
    dropArr: [],
    restingArr: [],
    restingSpotPlaceHolderArr: [],
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
    setInterval(() => {
      this.place();
    }, 300);
    setInterval(() => {
      this.drop();
      // console.log("Board after drop ", this.state.board);
    }, 50);
  }

  handlePaint() {
    const { dropArr } = this.state;
    const { restingSpotPlaceHolderArr } = this.state;
    const { restingArr } = this.state;

    const board = this.createBoard();
    for (let i = 0; i < restingArr.length; i++) {
      for (let j = 0; j < 4; j++) {
        board[restingArr[i][j][0]][restingArr[i][j][1]] = restingArr[i][4];
      }
    }
    for (let i = 0; i < restingSpotPlaceHolderArr.length; i++) {
      board[restingSpotPlaceHolderArr[i][0]][
        restingSpotPlaceHolderArr[i][1]
      ] = 1;
    }
    // console.log("drop arr in set state ", dropArr);
    for (let i = 0; i < dropArr.length; i++) {
      for (let j = 0; j < 4; j++) {
        if (dropArr[i][j][0] >= 0) {
          board[dropArr[i][j][0]][dropArr[i][j][1]] = dropArr[i][4];
          // console.log("here");
          // console.log(
          //   "drop arr spot test ",
          //   dropArr[i][j][0],
          //   dropArr[i][j][1],
          //   dropArr[i][4]
          // );
        }
      }
    }

    this.setState({ board });
    // console.log("state board ", board);
  }

  inputCells(row) {
    const array = [];
    for (let i = 0; i <= this.state.cells - 1; i++) {
      const id = row.toString() + i;
      const cellColorClass = "_" + Math.abs(this.state.board[row][i]);
      const allClasses = `cell ${cellColorClass}`;
      array.push(<div className={allClasses} ref={id} id={id} key={id} />);
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
      // this.state.board[x + placeHere[0]][y + placeHere[1]] = -1; // ? might have to use setState instead remove board manipulation
      dropRefrence.push([x, y + placeHere[1]]);
      this.state.restingSpotPlaceHolderArr.push([placeHere[0], placeHere[1]]); //* NEEED TO FIX - not correct cordinates
    }
    //? new logic: place resting place of dropping piece in restingSpotPlaceHolderArr.
    // console.log(x + placeHere[0], x + placeHere[1]);
    dropRefrence.push(tetrimino.color);
    dropRefrence.push(placeHere);
    // push to dropArr
    this.state.dropArr.push(dropRefrence);
    // console.log("dropRefrence:", dropRefrence);

    // console.log(
    //   "future Resting Spot Arr: ",
    //   this.state.restingSpotPlaceHolderArr
    // );
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
    const { restingSpotPlaceHolderArr } = this.state;
    const { restingArr } = this.state;
    // add 1 to x to drop piece
    for (let i = 0; i < dropArr.length; i++) {
      // if at resting spot
      if (dropArr[i][0][0] === dropArr[i][5][0]) {
        for (let j = 0; j < 4; j++) {
          const xx = dropArr[i][j][0];
          const yy = dropArr[i][j][1];
          board[xx][yy] = -Math.abs(dropArr[i][4]); //? new Logic: changed from -1 to value at color [4] // may not need logic here
        }
        const restingSpot = dropArr.shift(); // shift CHECK d
        // console.log("dropArr:", dropArr);
        //? new logic: remove from old array
        restingSpotPlaceHolderArr.shift();
        restingSpotPlaceHolderArr.shift();
        restingSpotPlaceHolderArr.shift();
        restingSpotPlaceHolderArr.shift();
        restingSpot[4] = -Math.abs(restingSpot[4]);
        restingArr.push(restingSpot);
        // console.log("resting arr should be - at [4] ", restingArr);
      }
      // * need to change logic ---->
      // //access x
      // for (let x = 0; x < 4; x++) {
      //   this.paint(dropArr[i][x][0], dropArr[i][x][1], dropArr[i][4]);
      // }
      for (let x = 0; x < 4; x++) {
        // console.log("drop Arr 1", dropArr[i][x]);
        dropArr[i][x][0] = dropArr[i][x][0] + 1;
        // console.log("drop Arr 2", dropArr[i][x]);
      }
      this.handlePaint();

      // console.log("dropArr:", dropArr);
      // console.log("dropArr spot:", dropArr[i][0][0]);
    }
    // console.log("this.board = : ", board);
  }

  paint(x, y, color) {
    // const oldXY = `${x}${y}`;
    // const newXY = `${x + 1}${y}`;
    // const oldReference = this.oldXY; // The DOM element
    // oldReference.style.backgroundColor = "222"; //* Hard coded for now.
    // const newReference = this.newXY.current; // The DOM element
    // newReference.style.backgroundColor = color; //* Hard coded for now.
  }

  rowComplete() {
    // need to plan... proabably need to splice matrice but also adjust x values for dropping pieces #tricky and might be skipped for time
  }

  stop() {
    console.log("full board");
  }
}

export default Blockrain;
