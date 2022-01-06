import React from "react";
import { v4 } from 'uuid';
import ResuableForm from "./ResuableForm";
import PropTypes from 'prop-types';

export default function NewTicketForm(props) {
  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    console.log("I AM WORKING");

    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: v4()
    })
  }
  return(
    <>
      <ResuableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Halp!"
      />
    </>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
}