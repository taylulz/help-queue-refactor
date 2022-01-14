/* eslint-disable default-case */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
      case 'DELETE_TICKET':
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
        return state;
  }
};