import React from "react";
import PropTypes from 'prop-types';
import NewTicketForm from "./NewTicketForm";
import TicketDetail from "./TicketDetail";
import TicketList from "./TicketList";
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';

export default class TicketControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      selectedTicket: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        // formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    // we use dispatch to send an action to the store. dispatch() comes from redux. It takes two arguments, 1. is the current state 2. is the action to be performed on the stat (delete a ticket, show a form boolean, etc.)
    const { dispatch } = this.props;
    const { id, names, location, issue } = newTicket;
    const action = {
      type: 'ADD_TICKET',
      id,
      names,
      location,
      issue
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
    // this.setState({
    //   formVisibleOnPage: false 
    // });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.props.mainTicketList[id];
    this.setState({ selectedTicket: selectedTicket });
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id,
    }
    dispatch(action);
    this.setState({
      selectedTicket: null
    });
  }

  handleEditClick = () => {
    console.log("HandleEditClick Reached!");
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = {
      type: 'ADD_TICKET',
      id,
      names,
      location,
      issue
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;


    if (this.state.editing) {
      currentlyVisibleState = 
        <EditTicketForm
          ticket={this.state.selectedTicket}
          onEditTicket={this.handleEditingTicketInList}
        />
      buttonText="Return to TicketList";

    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = 
        <TicketDetail 
          ticket={this.state.selectedTicket}
          onClickingDelete={this.handleDeletingTicket}
          onClickingEdit={this.handleEditClick}
        />

      buttonText="Return To List";

    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />

      buttonText = "Return To List";

    } else {
      currentlyVisibleState = 
        <TicketList 
          ticketList={this.props.mainTicketList}
          onTicketSelection={this.handleChangingSelectedTicket} 
        />

      buttonText = "Add Ticket";
    }

    return(
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

TicketControl.propTypes = {
  mainTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainTicketList: state.mainTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl);