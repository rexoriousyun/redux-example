import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0
};

export default function counter(state = initialstate, action) {
  switch(action.type) {
    case types.INCREMENT:
      return  {...state, number: state.number + 1 };
    case types.INCREMENT:
      return  {...state, number: state.number - 1 };
    default:
      return state;
  }
  return state;
}
