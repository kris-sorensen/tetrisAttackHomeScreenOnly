import React, { Component } from "react";
import Blockrain from "./blockrain";
import Comets from "./comets";
import Float from "./float";
import "./styles/container.css";


// class Container extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {};
//   render() {
//     return (
//       <div className="container">
//         {" "}
//         <Float></Float>
//         <Blockrain></Blockrain>
//       </div>
//     );
//   }
// }

const Container = () => {
  return (
    <div className="container">
      {" "}
      <Float></Float>
      {/* <Blockrain></Blockrain> */}
      <Comets />
    </div>
  );
}

export default Container;
