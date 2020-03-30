import React, { Component } from "react";
import readings from "../Data/readings";
import sensors from "../Data/sensors";
import { Table } from "semantic-ui-react";

export default class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function() {
    return Object.keys(this.props.data[0]);
  };

  getHeader = function() {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>;
    });
  };

  getRowsData = function() {
    let items = this.props.data;
    let keys = this.getKeys();
    return items.map((row, index) => {
      console.log(row);
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <Table singleLine>
          <Table.Header>
            <tr>{this.getHeader()}</tr>
          </Table.Header>
          <tbody>{this.getRowsData()}</tbody>
        </Table>
      </div>
    );
  }
}

const RenderRow = props => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
