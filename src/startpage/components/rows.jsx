import React, { Component } from "react";
import Cell from "./cells";
import "./styles/row.css";

class Row extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <Cell></Cell>
      </div>
    );
  }
}
export default Row;

// * number of collumns
