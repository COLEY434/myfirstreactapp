import React, { Component } from "react";
import Contact from "./Contact.js";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Anieze Collins",
          email: "chigoziecollins34@gmail.com",
          phone: "07069854477675"
        },
        {
          id: 2,
          name: "Anieze Alex",
          email: "collins34@gmail.com",
          phone: "07032444532475"
        },
        {
          id: 3,
          name: "Anieze Akunna",
          email: "collins34@gmail.com",
          phone: "07032434542475"
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            name={contact.name}
            Phone={contact.phone}
            email={contact.email}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
