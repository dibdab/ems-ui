import { IGenericResponse } from 'types';

// Define constants for actions names
export const EVENT_REPLAY_IS_LOADING = 'EVENT_REPLAY_IS_LOADING';
export const EVENT_REPLAY_HAS_ERRORED = 'EVENT_REPLAY_HAS_ERRORED';
export const EVENT_REPLAY_RESPONSE = 'EVENT_REPLAY_RESPONSE';
export const EVENT_REPLAY_SET_MESSAGE_ID = 'EVENT_REPLAY_SET_MESSAGE_ID';

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
  EVENT_REPLAY_SET_MESSAGE_ID: {
    type: typeof EVENT_REPLAY_SET_MESSAGE_ID;
    payload: string;
  };
};

// Create the actions
export const actionCreators = {
  eventReplayIsLoading: (
    payload: boolean,
  ): Actions[typeof EVENT_REPLAY_IS_LOADING] => ({
    type: EVENT_REPLAY_IS_LOADING,
    payload,
  }),
  eventReplayHasErrored: (
    payload: boolean,
  ): Actions[typeof EVENT_REPLAY_HAS_ERRORED] => ({
    type: EVENT_REPLAY_HAS_ERRORED,
    payload,
  }),
  eventReplayResponse: (
    payload: IGenericResponse,
  ): Actions[typeof EVENT_REPLAY_RESPONSE] => ({
    type: EVENT_REPLAY_RESPONSE,
    payload,
  }),
  eventReplaySetMessageID: (
    payload: string,
  ): Actions[typeof EVENT_REPLAY_SET_MESSAGE_ID] => ({
    type: EVENT_REPLAY_SET_MESSAGE_ID,
    payload,
  }),
};
