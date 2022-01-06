import React from "react";
import PropTypes from 'prop-types';

export default function ResuableForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' 
        />
        <input
          type='text'
          name='location'
          placeholder='Location' 
        />
        <textarea
          type='text'
          name='issue'
          placeholder='Issue description' 
        />
        <input 
          type='submit' 
          value={props.buttonText} 
        />
        {/* <button type='submit'>{props.buttonText}</button> */}
      </form>
    </>
  );
}

ResuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};