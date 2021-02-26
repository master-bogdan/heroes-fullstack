import {
  createStore,
  applyMiddleware,
  combineReducers,
  Action,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk, { ThunkAction } from 'redux-thunk';
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
  composeWithDevTools(applyMiddleware(reduxThunk, logger)),
);

// global types
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >
export type AppDispatch = typeof store.dispatch;
