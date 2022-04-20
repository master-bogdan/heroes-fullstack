import {
  Action,
  configureStore,
  Store,
  combineReducers,
} from '@reduxjs/toolkit';
// Reducers
import { authReducer } from './auth/auth.slice';
import { authServices } from './auth/auth.services';
import { heroesServices } from './heroes/heroes.services';

const rootReducer = combineReducers({
  // auth: authReducer,
  [heroesServices.reducerPath]: heroesServices.reducer,
  [authServices.reducerPath]: authServices.reducer,
});

const logger = (store: Store) => (next: any) => (action: Action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

let middleware: any = [];

const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  middleware = [...middleware, logger];
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: !isProduction,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
