import React, { Component } from "react";

export class ContactCard extends Component {
  render() {
    let contact = this.props.contact;
    return (
      <div className="App">
        <li className="g-col-12 s--g-col-6 l--g-col-3">
          <a
            href={contact.links.account}
            className="body block td-none black hover-ocean w-100 h-100 br-2 py-4 bs-solid bw-1 bc-ocean-40 bg-white bs-soft bs-hover translate-up-hover ta-center hover-rarr"
          >
            <h4 className="title m-0 mb-4 fw-700 fs-5 px-2">
              id: {contact.id}
            </h4>
            <h4 className="title m-0 mb-4 fw-700 fs-5 px-2">{`${
              contact.firstName
            } ${contact.lastName}`}</h4>
            <p className="slate-80 px-4 fs-3 fw-400 lh-3 m-0 mb-4 ph-3 mw-5 center">
              email: {contact.email}
            </p>
            <p className="slate-80 px-4 fs-3 fw-400 lh-3 m-0 mb-4 ph-3 mw-5 center">
              phone: {contact.phone}
            </p>
            <p className="slate-80 px-4 fs-3 fw-400 lh-3 m-0 mb-4 ph-3 mw-5 center">
              created: {contact.created_utc_timestamp}
            </p>
            <p className="slate-80 px-4 fs-3 fw-400 lh-3 m-0 mb-4 ph-3 mw-5 center">
              updated: {contact.updated_utc_timestamp}
            </p>
            <span className="inline-block my-2 fs-3 lh-3 fw-500 ocean">
              See Account
              <i className="rarr bc-ocean" />
            </span>
          </a>
        </li>
      </div>
    );
  }
}

export default ContactCard;
