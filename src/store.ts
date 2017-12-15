import { createStore } from 'redux';

import { rootReducer, IRootState } from './redux_';

function configureStore(intialState?: IRootState) {
  return createStore(rootReducer, intialState);
}

const store = configureStore();

export default store;
