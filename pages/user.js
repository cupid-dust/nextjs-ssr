import React from 'react';
import useAuth from '../hooks/useAuth';

const User = () => {
  const { user } = useAuth();

  //  * From this hook you can use User data in any component
  console.log(user);
  return <h1>User</h1>;
};

export default User;
