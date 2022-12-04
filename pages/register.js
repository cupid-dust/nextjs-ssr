import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

const Register = () => {
  const { register } = useAuth();

  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await register(fields.name, fields.email, fields.password);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Name:</label> <br />
        <input type='text' name='name' onChange={onChange} />
      </div>
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

export default Register;
