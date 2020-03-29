import React, { Component } from "react";
import ReactDOM from "react-dom";
import readings from "./Data/readings";
import sensors from "./Data/sensors";
import { formatToTimeZone } from "date-fns-timezone";
import Table from "./Components/Table";
import dateFormat from "dateformat";

class App extends Component {
  constructor(props) {
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
