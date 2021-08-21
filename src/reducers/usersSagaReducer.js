const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

function usersSagaReducer (state, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
