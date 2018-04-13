import { IMuleAppStatus } from 'types';

// Define constants for actions names
export const GET_MULE_APP_STATUS_IS_LOADING = 'GET_MULE_APP_STATUS_IS_LOADING';
export const GET_MULE_APP_STATUS_HAS_ERRORED = 'GET_MULE_APP_STATUS_HAS_ERRORED';
export const GET_MULE_APP_STATUS_FETCH_SUCCESS = 'GET_MULE_APP_STATUS_FETCH_SUCCESS';

// Define types for actions
export type Actions = {
  GET_MULE_APP_STATUS_IS_LOADING: {
    type: typeof GET_MULE_APP_STATUS_IS_LOADING;
    payload: boolean;
  };
  GET_MULE_APP_STATUS_HAS_ERRORED: {
    type: typeof GET_MULE_APP_STATUS_HAS_ERRORED;
    payload: boolean;
  };
  GET_MULE_APP_STATUS_FETCH_SUCCESS: {
    type: typeof GET_MULE_APP_STATUS_FETCH_SUCCESS;
    payload: IMuleAppStatus;
  };
};

// Create the actions
export const actionCreators = {
  getMuleAppStatusIsLoading: (
    payload: boolean,
  ): Actions[typeof GET_MULE_APP_STATUS_IS_LOADING] => ({
    type: GET_MULE_APP_STATUS_IS_LOADING,
    payload,
  }),
  getMuleAppStatusHasErrored: (
    payload: boolean,
  ): Actions[typeof GET_MULE_APP_STATUS_HAS_ERRORED] => ({
    type: GET_MULE_APP_STATUS_HAS_ERRORED,
    payload,
  }),
  getMuleAppStatusFetchSuccess: (
    payload: IMuleAppStatus,
  ): Actions[typeof GET_MULE_APP_STATUS_FETCH_SUCCESS] => ({
    type: GET_MULE_APP_STATUS_FETCH_SUCCESS,
    payload,
  }),
};
