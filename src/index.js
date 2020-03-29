import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Components/Table";

class App extends Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
