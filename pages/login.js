import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await login(fields.email, fields.password);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Email:</label> <br />
        <input type='email' name='email' onChange={onChange} />
      </div>
      <div>
        <label>Password:</label> <br />
        <input type='password' name='password' onChange={onChange} />
      </div>
      <div>
        <input type='submit' />
      </div>
    </form>
  );
};

export default Login;
