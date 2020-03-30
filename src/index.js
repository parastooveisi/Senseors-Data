import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "semantic-ui-react";
import readings from "./Data/readings";
import sensors from "./Data/sensors";
import Table from "./Components/Table";
import { convertToF, timeZone, timeZoneSensor } from "./Utility/utils";
const celcuis_data = readings;
let fahrenheit_data = readings;

class App extends Component {
  constructor(props) {
    timeZone(readings);
    timeZoneSensor(sensors);

    readings.forEach(element => {
      element.value = (Math.round(element.value * 100) / 100).toFixed(2);
    });

    super(props);
    this.state = {
      sensors_data: sensors,
      celcuis_data: readings,
      celcuis: true
    };
  }

  preProcessing = () => {
    const tempSensors = sensors.filter(sensor => {
      if (sensor.units == "Celsius") {
        console.log(sensor.id);
        return sensor.id;
      }
    });

    const tempSensorIds = tempSensors.map(sensor => sensor.id);

    fahrenheit_data = readings.map(reading => {
      return tempSensorIds.includes(reading.sensorId)
        ? { ...reading, value: convertToF(reading.value).toString() }
        : reading;
    });

    console.log(fahrenheit_data);
    return fahrenheit_data;
  };
  onClick = () => {
    this.setState({ celcuis: !this.state.celcuis });
  };

  componentDidMount() {
    fahrenheit_data = this.preProcessing();
  }

  render() {
    return (
      <Container style={{ marginTop: "10px" }}>
        <Table data={this.state.sensors_data} />
        <Table data={this.state.celcuis ? celcuis_data : fahrenheit_data} />
        <Button floated="right" primary basic onClick={this.onClick}>
          Change Unit
        </Button>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
