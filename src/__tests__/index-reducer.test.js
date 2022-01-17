import rootReducer from '../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../reducers/form-visible-reducer';
import ticketListReducer from '../reducers/ticket-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainTicketList: {},
      formVisibleOnPage: false
    });
  });

  test('Check initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });

  test('Check initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, {type: null }));
  });

});