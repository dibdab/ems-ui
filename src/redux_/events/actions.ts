import { IEvent, IEventFilter } from 'types';

// Define constants for actions names
export const EVENTS_IS_LOADING = 'EVENTS_IS_LOADING';
export const EVENTS_HAS_ERRORED = 'EVENTS_HAS_ERRORED';
export const EVENTS_FETCH_SUCCESS = 'EVENTS_FETCH_SUCCESS';
export const EVENTS_FILTER_CHANGE = 'EVENTS_FILTER_CHANGE';

// Define types for actions
export type Actions = {
  EVENTS_IS_LOADING: {
    type: typeof EVENTS_IS_LOADING;
    payload: boolean;
  };
  EVENTS_HAS_ERRORED: {
    type: typeof EVENTS_HAS_ERRORED;
    payload: boolean;
  };
  EVENTS_FETCH_SUCCESS: {
    type: typeof EVENTS_FETCH_SUCCESS;
    payload: IEvent[];
  };
  EVENTS_FILTER_CHANGE: {
    type: typeof EVENTS_FILTER_CHANGE;
    payload: IEventFilter;
  };
};

// Create the actions
export const actionCreators = {
  eventsIsLoading: (
    payload: boolean,
  ): Actions[typeof EVENTS_IS_LOADING] => ({
    type: EVENTS_IS_LOADING,
    payload,
  }),
  eventsHasErrored: (
    payload: boolean,
  ): Actions[typeof EVENTS_HAS_ERRORED] => ({
    type: EVENTS_HAS_ERRORED,
    payload,
  }),
  eventsFetchSuccess: (
    payload: IEvent[],
  ): Actions[typeof EVENTS_FETCH_SUCCESS] => ({
    type: EVENTS_FETCH_SUCCESS,
    payload,
  }),
  eventsFilterChange: (
    payload: IEventFilter,
  ): Actions[typeof EVENTS_FILTER_CHANGE] => ({
    type: EVENTS_FILTER_CHANGE,
    payload,
  }),
};
