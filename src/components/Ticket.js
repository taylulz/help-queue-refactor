import React from "react";
import PropTypes from "prop-types";

export default function Ticket(props) {
  return (
    <>
    {/* use arrow func in onClick prop to prevent expression from being evaluated immediately */}
      <div onClick={() => props.whenTicketClicked(props.id)}>
        <h3>{props.location} --- {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};