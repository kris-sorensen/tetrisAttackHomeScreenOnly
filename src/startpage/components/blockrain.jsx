import React, { Component } from "react";
// import Row from "./rows";
import "./styles/blockrain.css";

class Blockrain extends Component {
  state = {
    rows: 32, // make dynamic based on the screen size
    cells: 65,
    blockSize: 30,
    board: this.createBoard(),
  };

  render() {
    console.log("my board", this.state.board);
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
}

export default Blockrain;

// * amount of rows
