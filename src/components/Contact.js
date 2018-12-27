import React, { Component } from "react";
import "../App.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  render() {
    const { name, email, Phone } = this.props;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h3 className="ok">
          {name}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            style={{ cursor: "pointer" }}
            className="fas fa-sort-down"
          />

          <i
            className="fas fa-times"
            style={{ cursor: "pointer", color: "red", float: "right" }}
          />
        </h3>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {Phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
export default Contact;
