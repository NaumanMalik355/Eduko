import login_Reducer from './login';
import register_Reducer from './Register';
import todo_Reducer from './todo';
import data_Reducer from './data';
import eduko_Reducer from './Eduko'
import student_Reducer from './Student'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  login_Reducer,
  register_Reducer,
  todo_Reducer,
  data_Reducer,
  eduko_Reducer,
  student_Reducer
});

export default rootReducer;
