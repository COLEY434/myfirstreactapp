import React, { Component } from "react";
import "../App.css";

class Contact extends Component {
  render() {
    const { name, email, Phone } = this.props;
    return (
      <div>
        <h3 className="ok">{name}</h3>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {Phone}</li>
        </ul>
      </div>
    );
  }
}
export default Contact;
