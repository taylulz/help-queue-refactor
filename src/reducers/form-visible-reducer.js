/* eslint-disable import/no-anonymous-default-export */
export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_FORM':
      return !state;
    default:
      return  state;
  }
};