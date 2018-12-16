import React, { Component } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact
          name="Anieze collins"
          Phone="07075938422"
          email="dkjjse@gmail.com"
        />
        <Contact
          name="Anieze Alexander"
          Phone="08033392753"
          email="alex@gmail.com"
        />
      </div>
    );
  }
}

export default App;
