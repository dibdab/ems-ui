import { Subscriber } from '../../types/Subscriber';

import {
  SUBSCRIBERS_IS_LOADING,
  SUBSCRIBERS_FETCH_SUCCESS,
  SUBSCRIBERS_HAS_ERRORED,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  subscribers: Subscriber[];
  subscribersIsLoading: boolean;
  subscribersHasErrored: boolean;
}>;

export const reducer = combineReducers<State>({
  subscribers: (state = [], action) => {
    switch (action.type) {
      case SUBSCRIBERS_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  },
  subscribersIsLoading: (state = false, action) => {
    switch (action.type) {
      case SUBSCRIBERS_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  subscribersHasErrored: (state = false, action) => {
    switch (action.type) {
      case SUBSCRIBERS_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
});
