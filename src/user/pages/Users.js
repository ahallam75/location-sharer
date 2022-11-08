import React from 'react';

import UserList from '../components/UserList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Doe',
      image: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
      places: 3
    }
  ];
  return <UserList items={USERS} />
};

export default Users;

