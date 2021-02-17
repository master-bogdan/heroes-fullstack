import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import crudReducer from './crud/crudReducer';

const rootReducer = combineReducers({
  crud: crudReducer,
  form: formReducer,
});

const logger = (store: any) => (next: any) => (action: any) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);
