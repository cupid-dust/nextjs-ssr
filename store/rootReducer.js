import { combineReducers } from '@reduxjs/toolkit';
import { reducer as todos } from '../slices/todo';

const combinedReducer = combineReducers({
  todos,
});

export default combinedReducer;
