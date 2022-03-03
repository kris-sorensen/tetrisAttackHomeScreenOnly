import React, { Component } from "react";
import "./styles/float.css";
// import logo from "images/tetrisLogo.png";

class Float extends Component {
  state = {
    url: null,
  };
  handleClick() {
    fetch("/play", {
      method: "GET",
    })
      // .then(res => res.json())
      // .then(data => {
      //   body.style.background = data.color;
      // })
      .catch((err) => console.log(err));
    console.log("click"); //* switch to url
  }

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
          <button className="play" onClick={() => this.handleClick()}>
            Play
          </button>{" "}
        </div>
      </div>
    );
  }
}

export default Float;
