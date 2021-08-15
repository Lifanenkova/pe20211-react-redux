import React from 'react';
import UserForm from '../../components/UserForm';
import UsersList from '../../components/UsersList';

function UserPage () {
  return (
    <div>
      <UserForm />
      <UsersList />
    </div>
  );
}

export default UserPage;
