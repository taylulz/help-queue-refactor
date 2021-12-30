import React from "react";
import PropTypes from "prop-types";

export default function Ticket(props) {
  return (
    <>
      <h3>{props.location} --- {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};