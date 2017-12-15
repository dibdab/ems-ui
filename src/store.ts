import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer, IRootState } from './redux/';

function configureStore(intialState?: IRootState) {
  return createStore(rootReducer, intialState);
}

const store = configureStore();

export default store;
