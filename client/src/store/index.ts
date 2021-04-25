import {
  createStore,
  applyMiddleware,
  combineReducers,
  Action,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk, { ThunkAction } from 'redux-thunk';
// Reducers
import crudReducer from './crud/crudReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  crud: crudReducer,
  auth: authReducer,
});

// middleware

const logger = (store: Store) => (next: any) => (action: Action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

let middleware: any = [
  reduxThunk,
];
const processNode: string = process.env.NODE_ENV;
if (processNode === 'development') {
  middleware = [...middleware, logger];
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
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
