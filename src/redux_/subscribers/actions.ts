import { ISubscriber } from 'types';

// Define constants for actions names
export const SUBSCRIBERS_IS_LOADING = 'SUBSCRIBERS_IS_LOADING';
export const SUBSCRIBERS_HAS_ERRORED = 'SUBSCRIBERS_HAS_ERRORED';
export const SUBSCRIBERS_FETCH_SUCCESS = 'SUBSCRIBERS_FETCH_SUCCESS';

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
};
