import React, { Component } from "react";
import Row from "./rows";
import "./styles/blockrain.css";

class Blockrain extends Component {
  state = {};
  // create matrice and render in grid style. Take the width of the screen and divide it by X to get square sizes. and set in style
  render() {
    return (
      <div className="blockrain">
        <h1>hello</h1>
        <Row></Row>
      </div>
    );
  }

  //Methods:

  // drop
  // find spot
  // choose piece
}

export default Blockrain;

// * amount of rows
