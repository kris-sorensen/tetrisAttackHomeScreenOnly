import React, { Component } from "react";
import "./styles/float.css";

// import logo from "images/tetrisLogo.png";

class Float extends Component {
  state = {};

  render() {
    return (
      <div className="float">
        <div className="content">
          <img
            src={require("./images/tetrisLogo.png")}
            alt="Logo"
            // srcSet="./images/tetrisLogo.png"
            className="logo"
          />
          <div className="singleMultiSlider"></div>
          <button className="play">
            Play
            {/* <Link to="/play">Play</Link> */}
          </button>{" "}
        </div>
      </div>
    );
  }
}

export default Float;
