import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import usersReducer from './usersReducer';
import usersSagaReducer from './usersSagaReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  userState: usersReducer,
  user: usersSagaReducer,
});
export default rootReducer;
