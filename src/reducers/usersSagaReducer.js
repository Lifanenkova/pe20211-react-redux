import ACTION_TYPES from '../actions/actionTypes';
const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

function usersSagaReducer (state, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.GET_USERS_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_USERS_SUCCESS: {
      const { users } = action;
      return {
        ...state,
        isFetching: false,
        users: users,
      };
    }
    case ACTION_TYPES.GET_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error: error,
      };
    }
    default:
      return state;
  }
}

export default usersSagaReducer;
