import { IGenericResponse } from 'types';

import {
  EVENT_REPLAY_IS_LOADING,
  EVENT_REPLAY_HAS_ERRORED,
  EVENT_REPLAY_RESPONSE,
  EVENT_REPLAY_SET_MESSAGE_ID,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  eventReplayResponse: IGenericResponse;
  eventReplayIsLoading: boolean;
  eventReplayHasErrored: boolean;
  eventReplayMessageID: string;
}>;

export const reducer = combineReducers<State>({
  eventReplayResponse: (state = {}, action) => {
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
  eventReplayMessageID: (state = '', action) => {
    switch (action.type) {
      case EVENT_REPLAY_SET_MESSAGE_ID:
        return action.payload;

      default:
        return state;
    }
  },
});
