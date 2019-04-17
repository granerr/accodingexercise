import React, { Component } from "react";
import "./App.css";
import request from "request";
import ContactCard from "./ContactCard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.setContacts = this.setContacts.bind(this);
  }

  setContacts() {
    //Proxy used because a 3 hour time limit was recommended for this exercise & CORS issues were not resolved through simple header fixes.
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const options = {
      method: "GET",
      url: proxyurl + "https://lamppoststudios.activehosted.com/api/3/contacts",
      headers: {
        "Api-Token": process.env.REACT_APP_AC_API_KEY
      }
    };
    let newPromiseHere = new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        if (error) {
          throw new Error(error);
        } else {
          resolve(JSON.parse(body));
        }
      });
    });
    newPromiseHere.then(result => this.setState({ contacts: result }));
  }

  componentDidMount() {
    this.setContacts();
  }

  render() {
    let contacts = this.state.contacts.contacts;
    return (
      <div className="App">
        <section className="mw-grid mx-auto ta-center p-4 mb-8 m--mb-10">
          <div className="ta-left s--ta-center">
            <h2 className="title fs-8 lh-7 m-0 mb-5 m--fs-10 m--lh-9 l--fs-12 l--lh-11  ">
              Contact info including: id, name, email, phone, UTC created, & UTC
              updated.
            </h2>
            <p className="body m-0 mb-8 fs-4 lh-4 m--fs-5 mw-36 mx-auto  ">
              Each card links to the links.account property of each contact.
              First and last name included only where applicable.
            </p>
            <p className="body m-0 mb-8 fs-4 lh-4 m--fs-5 mw-36 mx-auto  ">
              Rose Graner, code exercise for ActiveCampaign JavaScript Engineer
              role, April 2019.
            </p>
          </div>
          <ul className="list p-0 grid gap-s g-cols">
            {contacts && contacts.length
              ? contacts.map((contact, idx) => (
                  <ContactCard key={idx} contact={contact} />
                ))
              : null}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
