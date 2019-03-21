import disclaimerReducer from '../reducers';

it('initial state is correct', () => {
  const action = { type: 'DELETE_DISCLAIMER' };
  const initialState = { accepted: false };

  expect(disclaimerReducer(undefined, action)).toEqual(initialState);
});

it('disclaimerReducer returns the correct state', () => {
  const action = { type: 'ACCEPT_DISCLAIMER' };
  const expectedState = { accepted: true };

  expect(disclaimerReducer(undefined, action)).toEqual(expectedState);
});
