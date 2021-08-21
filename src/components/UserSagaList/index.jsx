import React from 'react';
import { connect } from 'react-redux';

function UsersSagaList (props) {
  const {} = props;
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
const mapStateToProps = state => state.userState;
const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersSagaList);
