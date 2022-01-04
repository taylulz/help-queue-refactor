import React from "react";
import { v4 } from 'uuid';
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
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder="Location" />
        <textarea
          name='issue'
          placeholder="Describe the issue" />
        <input type='submit' value='Halp!' />
      </form>
    </>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
}