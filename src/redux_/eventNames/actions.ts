import { IEventNames } from 'types';

// Define constants for actions names
export const GET_ALL_EVENT_NAMES_IS_LOADING = 'GET_ALL_EVENT_NAMES_IS_LOADING';
export const GET_ALL_EVENT_NAMES_HAS_ERRORED = 'GET_ALL_EVENT_NAMES_HAS_ERRORED';
export const GET_ALL_EVENT_NAMES_FETCH_SUCCESS = 'GET_ALL_EVENT_NAMES_FETCH_SUCCESS';
export const GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING = 'GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING';
export const GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED = 'GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED';
export const GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS = 'GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS';

// Define types for actions
export type Actions = {
  GET_ALL_EVENT_NAMES_IS_LOADING: {
    type: typeof GET_ALL_EVENT_NAMES_IS_LOADING;
    payload: boolean;
  };
  GET_ALL_EVENT_NAMES_HAS_ERRORED: {
    type: typeof GET_ALL_EVENT_NAMES_HAS_ERRORED;
    payload: boolean;
  };
  GET_ALL_EVENT_NAMES_FETCH_SUCCESS: {
    type: typeof GET_ALL_EVENT_NAMES_FETCH_SUCCESS;
    payload: IEventNames;
  };
  GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING: {
    type: typeof GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING;
    payload: boolean;
  };
  GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED: {
    type: typeof GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED;
    payload: boolean;
  };
  GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS: {
    type: typeof GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS;
    payload: IEventNames;
  };
};

// Create the actions
export const actionCreators = {
  getAllEventNamesIsLoading: (
    payload: boolean,
  ): Actions[typeof GET_ALL_EVENT_NAMES_IS_LOADING] => ({
    type: GET_ALL_EVENT_NAMES_IS_LOADING,
    payload,
  }),
  getAllEventNamesHasErrored: (
    payload: boolean,
  ): Actions[typeof GET_ALL_EVENT_NAMES_HAS_ERRORED] => ({
    type: GET_ALL_EVENT_NAMES_HAS_ERRORED,
    payload,
  }),
  getAllEventNamesFetchSuccess: (
    payload: IEventNames,
  ): Actions[typeof GET_ALL_EVENT_NAMES_FETCH_SUCCESS] => ({
    type: GET_ALL_EVENT_NAMES_FETCH_SUCCESS,
    payload,
  }),
  getSubscribedEventNamesIsLoading: (
    payload: boolean,
  ): Actions[typeof GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING] => ({
    type: GET_SUBSCRIBED_EVENT_NAMES_IS_LOADING,
    payload,
  }),
  getSubscribedEventNamesHasErrored: (
    payload: boolean,
  ): Actions[typeof GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED] => ({
    type: GET_SUBSCRIBED_EVENT_NAMES_HAS_ERRORED,
    payload,
  }),
  getSubscribedEventNamesFetchSuccess: (
    payload: IEventNames,
  ): Actions[typeof GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS] => ({
    type: GET_SUBSCRIBED_EVENT_NAMES_FETCH_SUCCESS,
    payload,
  }),
};
