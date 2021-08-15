import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  users: [
    {
      id: Date.now(),
      name: 'Myself',
      telNumber: '+38099999999',
      isBanned: false,
    },
  ],
};
//pure function(state, action)=>state
const usersReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_USER: {
      const { userData } = action;
      const { users } = state;
      const newUser = { ...userData, id: Date.now(), isBanned: false };
      const newUsers = [...users, newUser];
      return { users: newUsers };
    }
    case ACTION_TYPES.UPDATE_USER: {
      const { newInfo: newUserInfo } = action;
      const { users } = state;
      const newUsers = [...users];
      const index = newUsers.findIndex(u => newUserInfo.id === u.id);
      newUsers[index] = {
        ...newUsers[index],
        isBanned: newUserInfo.isBanned, //...newUserInfo
      };
      return { users: newUsers };
    }
    case ACTION_TYPES.DELETE_USER: {
      const { id } = action;
      const { users } = state;
      const newUsers = [...users];
      const index = newUsers.findIndex(u => id === u.id);
      newUsers.splice(index, 1);
      return { users: newUsers };
    }

    default:
      return state;
  }
};

export default usersReducer;
