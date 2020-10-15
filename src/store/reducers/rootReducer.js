import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import readReducer from './read';

export default combineReducers({
    read: readReducer,
    form: formReducer
  })