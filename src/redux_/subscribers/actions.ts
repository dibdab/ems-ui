import { ISubscriber, ISubscriberFilter } from 'types';

// Define constants for actions names
export const SUBSCRIBERS_IS_LOADING = 'SUBSCRIBERS_IS_LOADING';
export const SUBSCRIBERS_HAS_ERRORED = 'SUBSCRIBERS_HAS_ERRORED';
export const SUBSCRIBERS_FETCH_SUCCESS = 'SUBSCRIBERS_FETCH_SUCCESS';
export const SUBSCRIBERS_FILTER_CHANGE = 'SUBSCRIBERS_FILTER_CHANGE';

// Define types for actions
export type Actions = {
  SUBSCRIBERS_IS_LOADING: {
    type: typeof SUBSCRIBERS_IS_LOADING;
    payload: boolean;
  };
  SUBSCRIBERS_HAS_ERRORED: {
    type: typeof SUBSCRIBERS_HAS_ERRORED;
    payload: boolean;
  };
  SUBSCRIBERS_FETCH_SUCCESS: {
    type: typeof SUBSCRIBERS_FETCH_SUCCESS;
    payload: ISubscriber[];
  };
  SUBSCRIBERS_FILTER_CHANGE: {
    type: typeof SUBSCRIBERS_FILTER_CHANGE;
    payload: ISubscriberFilter;
  };
};

// Create the actions
export const actionCreators = {
  subscribersIsLoading: (
    payload: boolean,
  ): Actions[typeof SUBSCRIBERS_IS_LOADING] => ({
    type: SUBSCRIBERS_IS_LOADING,
    payload,
  }),
  subscribersHasErrored: (
    payload: boolean,
  ): Actions[typeof SUBSCRIBERS_HAS_ERRORED] => ({
    type: SUBSCRIBERS_HAS_ERRORED,
    payload,
  }),
  subscribersFetchSuccess: (
    payload: ISubscriber[],
  ): Actions[typeof SUBSCRIBERS_FETCH_SUCCESS] => ({
    type: SUBSCRIBERS_FETCH_SUCCESS,
    payload,
  }),
  subscribersFilterChange: (
    payload: ISubscriberFilter,
  ): Actions[typeof SUBSCRIBERS_FILTER_CHANGE] => ({
    type: SUBSCRIBERS_FILTER_CHANGE,
    payload,
  }),
};
