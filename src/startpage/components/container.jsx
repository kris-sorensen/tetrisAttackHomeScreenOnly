import React from "react";
import Comets from "./comets";
import Float from "./float";
import "./styles/container.css";

const Container = () => {
  return (
    <div className="container">
      <Float></Float>
      <Comets />

    </div>
  );
}

export default Container;
