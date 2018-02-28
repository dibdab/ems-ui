import { IEventNames } from 'types';

import {
  GET_ALL_EVENT_NAMES_IS_LOADING,
  GET_ALL_EVENT_NAMES_HAS_ERRORED,
  GET_ALL_EVENT_NAMES_FETCH_SUCCESS,
  GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING,
  GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED,
  GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  allEventNames: IEventNames;
  allEventNamesIsLoading: boolean;
  allEventNamesHasErrored: boolean;
  subscribedEventNames: IEventNames;
  subscribedEventNamesIsLoading: boolean;
  subscribedEventNamesHasErrored: boolean;
}>;

export const reducer = combineReducers<State>({
  allEventNames: (state: IEventNames = { success: false, events: [] }, action) => {
    switch (action.type) {
      case GET_ALL_EVENT_NAMES_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  },
  allEventNamesIsLoading: (state = false, action) => {
    switch (action.type) {
      case GET_ALL_EVENT_NAMES_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  allEventNamesHasErrored: (state = false, action) => {
    switch (action.type) {
      case GET_ALL_EVENT_NAMES_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
  subscribedEventNames: (state: IEventNames = { success: false, events: [] }, action) => {
    switch (action.type) {
      case GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  },
  subscribedEventNamesIsLoading: (state = false, action) => {
    switch (action.type) {
      case GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  subscribedEventNamesHasErrored: (state = false, action) => {
    switch (action.type) {
      case GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
});
