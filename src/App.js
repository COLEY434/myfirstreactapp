import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    const kim = true;
    let mat;
    if (kim) {
      mat = <h4>You are welcome to the lords house</h4>;
    } else {
      mat = <h3>You are not welcomed</h3>;
    }
    return (
      <div className="App">
        <h1>React App</h1>
        {mat}
        {/*  <p>
          {kim ? (
            <h4>You are welcome to the lords house</h4>
          ) : (
            <h3>You are not welcomed</h3>
          )}
        </p> */}
      </div>
    );
  }
}

export default App;
