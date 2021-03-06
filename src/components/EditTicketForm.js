import React from "react";
import ResuableForm from "./ResuableForm";
import PropTypes from 'prop-types';

export default function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id
    });
  }
  
  return(
    <>
      <ResuableForm
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
    </>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
};