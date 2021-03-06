import ACTION_TYPES from './actionTypes';

export const increment = () => ({ type: ACTION_TYPES.INCREMENT });

export const decrement = () => ({ type: ACTION_TYPES.DECREMENT });

export const setStep = newStep => ({
  type: ACTION_TYPES.SET_STEP,
  value: newStep,
});

export const createUser = userData => ({
  type: ACTION_TYPES.CREATE_USER,
  userData: userData,
});

export const updateUser = newInfo => ({
  type: ACTION_TYPES.UPDATE_USER,
  newInfo: newInfo,
});

export const deleteUser = id => ({
  type: ACTION_TYPES.DELETE_USER,
  id: id,
});

export const getUsersAction = () => ({
  type: ACTION_TYPES.GET_USERS_ACTION,
});

export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = users => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  users: users,
});

export const getUsersError = error => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error: error,
});
