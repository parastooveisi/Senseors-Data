import React, { Component } from "react";
import ReactDOM from "react-dom";
import readings from "./Data/readings";
import sensors from "./Data/sensors";
import Table from "./Components/Table";

class App extends Component {
  constructor(props) {
    readings.forEach(element => {
      element.time = new Date(element.time).toString().slice(0, 25);
    });
    sensors.forEach((element, index, array) => {
      element.createdAt = new Date(element.createdAt).toString().slice(0, 25);
    });

    readings.forEach(element => {
      element.value = (Math.round(element.value * 100) / 100).toFixed(2);
    });

    super(props);
    this.state = {
      readings_data: readings,
      sensors_data: sensors
    };
  }

  render() {
    return (
      <div>
        <Table data={this.state.sensors_data} />
        <Table data={this.state.readings_data} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
