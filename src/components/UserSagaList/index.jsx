import React from 'react';
import { connect } from 'react-redux';
import { getUsersAction } from '../../actions';
import ACTION_TYPES from '../../actions/actionTypes';
import * as actionCreators from './../../actions';

function UsersSagaList (props) {
  const { users, isFetching, error, getUsers } = props;

  useEffect(() => {
    getUsers();
  }, []);

  const mapUser = ({ id, name, telNumber, isBanned }) => {
    const changeBan = () => {
      updateUserAction({ id: id, isBanned: !isBanned });
    };

    const deleteUser = () => {
      deleteUserAction(id);
    };

    return (
      <li key={id}>
        ID: {id} name: {name} tel.:{telNumber}
        <input type='checkbox' checked={isBanned} onChange={changeBan} />
        <button onClick={deleteUser}>Delete</button>
      </li>
    );
  };
  return <ul>{users.map(mapUser)}</ul>;
}
const mapStateToProps = state => state.user;
const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actionCreators.getUsersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersSagaList);
