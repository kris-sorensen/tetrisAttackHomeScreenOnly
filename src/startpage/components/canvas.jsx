import React, { Component } from "react";
import Blockrain from "./blockrain";
import Container from "./container";
import "./styles/canvas.css";

class Canvas extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <div className="canvas">
        {" "}
        <p>hi</p>
        <Blockrain></Blockrain>
        {/* <Container></Container> */}
      </div>
    );
  }
}

export default Canvas;
