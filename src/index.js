import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "semantic-ui-react";
import readings from "./Data/readings";
import sensors from "./Data/sensors";
import Table from "./Components/Table";
import { convertToF, changeTimeZone, roundNumbers } from "./Utility/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.celcius_data = readings;
    this.farenheitData = readings;
    this.sensorsData = sensors;

    this.farenheitData = this.preProcessData();

    this.state = {
      celcius: true
    };
  }

  preProcessData = () => {
    readings.forEach(element => {
      element.value = roundNumbers(element.value);
    });

    readings.forEach(element => {
      element.time = changeTimeZone(element.time);
    });

    sensors.forEach(element => {
      element.createdAt = changeTimeZone(element.createdAt);
    });

    const tempSensors = sensors.filter(sensor => {
      if (sensor.units === "Celsius") {
        return sensor.id;
      }
    });

    const tempSensorIds = tempSensors.map(sensor => sensor.id);

    this.farenheitData = readings.map(reading => {
      return tempSensorIds.includes(reading.sensorId)
        ? { ...reading, value: convertToF(reading.value).toString() }
        : reading;
    });

    return this.farenheitData;
  };

  onClick = () => {
    this.setState(prevState => ({
      celcius: !prevState.celcius
    }));
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Table data={this.sensorsData} />
        <Button floated="right" primary basic onClick={this.onClick}>
          C / F
        </Button>
        <div style={{ marginTop: "20px" }}>
          <Table
            data={this.state.celcius ? this.celcius_data : this.farenheitData}
          />
        </div>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
