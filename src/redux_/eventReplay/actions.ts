import { IGenericResponse } from 'types';

// Define constants for actions names
export const EVENT_REPLAY_IS_LOADING = 'EVENT_REPLAY_IS_LOADING';
export const EVENT_REPLAY_HAS_ERRORED = 'EVENT_REPLAY_HAS_ERRORED';
export const EVENT_REPLAY_RESPONSE = 'EVENT_REPLAY_RESPONSE';

// Define types for actions
export type Actions = {
  EVENT_REPLAY_IS_LOADING: {
    type: typeof EVENT_REPLAY_IS_LOADING;
    payload: boolean;
  };
  EVENT_REPLAY_HAS_ERRORED: {
    type: typeof EVENT_REPLAY_HAS_ERRORED;
    payload: boolean;
  };
  EVENT_REPLAY_RESPONSE: {
    type: typeof EVENT_REPLAY_RESPONSE;
    payload: IGenericResponse;
  };
};

// Create the actions
export const actionCreators = {
  getAllEventNamesIsLoading: (
    payload: boolean,
  ): Actions[typeof EVENT_REPLAY_IS_LOADING] => ({
    type: EVENT_REPLAY_IS_LOADING,
    payload,
  }),
  getAllEventNamesHasErrored: (
    payload: boolean,
  ): Actions[typeof EVENT_REPLAY_HAS_ERRORED] => ({
    type: EVENT_REPLAY_HAS_ERRORED,
    payload,
  }),
  getAllEventNamesFetchSuccess: (
    payload: IGenericResponse,
  ): Actions[typeof EVENT_REPLAY_RESPONSE] => ({
    type: EVENT_REPLAY_RESPONSE,
    payload,
  }),
};
