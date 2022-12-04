import React from 'react';
import { getTodos } from '../slices/todo';
import { wrapper } from '../store';
import { useSelector } from 'react-redux';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return <div>TodoApp</div>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(getTodos());
  }
);

export default TodoApp;
