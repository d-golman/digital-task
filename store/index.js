import { useMemo } from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { gameListReducer } from './reducers/gameListReducer';
import { gameReducer } from './reducers/gameReducer';
import { gamesReducer } from './reducers/gamesReducer';
import { platformReducer } from './reducers/platformsReducer';

const reducer = combineReducers({
  games: gamesReducer,
  game: gameReducer,
  platforms: platformReducer,
  gameList: gameListReducer
});

let store;

function initStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunkMiddleware)
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}