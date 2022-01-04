import React from "react";
import PropTypes from 'prop-types';

export default function TicketDetail(props){
  // we destructure, otherwise we need to use props.ticket.names etc
  const { ticket } = props;

  return(
    <>
      <h1>TicketDetail</h1>
      <h3>{ticket.location} - {ticket.names}</h3>
      <p>{ticket.issue}</p>
      <hr/>
    </>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object
}