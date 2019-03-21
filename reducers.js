import Store from './store';

export const initialState = Store;

export default function disclaimerReducer(state = initialState, action) {
  // console.log("***** disclaimer reducer called *****", state, action);
  switch (action.type) {
    case 'ACCEPT_DISCLAIMER': {
      return {
        ...state,
        accepted: true,
      };
    }
    default:
      return state;
  }
}
