import { IEvent, IEventFilter } from 'types';
import { initEventFilter } from 'constants/index';

import {
  EVENTS_IS_LOADING,
  EVENTS_FETCH_SUCCESS,
  EVENTS_HAS_ERRORED,
  EVENTS_FILTER_CHANGE,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  events: IEvent[];
  eventsIsLoading: boolean;
  eventsHasErrored: boolean;
  eventsFilter: IEventFilter | {};
}>;

export const reducer = combineReducers<State>({
  events: (state = [], action) => {
    switch (action.type) {
      case EVENTS_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  },
  eventsIsLoading: (state = false, action) => {
    switch (action.type) {
      case EVENTS_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  eventsHasErrored: (state = false, action) => {
    switch (action.type) {
      case EVENTS_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
  eventsFilter: (state = initEventFilter, action) => {
    switch (action.type) {
      case EVENTS_FILTER_CHANGE:
        return action.payload;

      default:
        return state;
    }
  },
});
