import { IGenericResponse } from 'types';

import {
  EVENT_REPLAY_IS_LOADING,
  EVENT_REPLAY_HAS_ERRORED,
  EVENT_REPLAY_RESPONSE,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  eventReplayResponse: IGenericResponse;
  eventReplayIsLoading: boolean;
  eventReplayHasErrored: boolean;
}>;

export const reducer = combineReducers<State>({
  eventReplayResponse: (state: IGenericResponse = { success: true }, action) => {
    switch (action.type) {
      case EVENT_REPLAY_RESPONSE:
        return action.payload;

      default:
        return state;
    }
  },
  eventReplayIsLoading: (state = false, action) => {
    switch (action.type) {
      case EVENT_REPLAY_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  eventReplayHasErrored: (state = false, action) => {
    switch (action.type) {
      case EVENT_REPLAY_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
});
