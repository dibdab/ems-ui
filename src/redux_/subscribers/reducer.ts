import { ISubscriber, ISubscriberFilter } from 'types';

import {
  SUBSCRIBERS_IS_LOADING,
  SUBSCRIBERS_FETCH_SUCCESS,
  SUBSCRIBERS_HAS_ERRORED,
  SUBSCRIBERS_FILTER_CHANGE,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  subscribers: ISubscriber[];
  subscribersIsLoading: boolean;
  subscribersHasErrored: boolean;
  subscribersFilter: ISubscriberFilter;
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
  subscribersFilter: (state = {}, action) => {
    switch (action.type) {
      case SUBSCRIBERS_FILTER_CHANGE:
        return action.payload;

      default:
        return state;
    }
  },
});
