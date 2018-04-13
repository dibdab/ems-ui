import { IMuleAppStatus } from 'types';

import {
  GET_MULE_APP_STATUS_IS_LOADING,
  GET_MULE_APP_STATUS_HAS_ERRORED,
  GET_MULE_APP_STATUS_FETCH_SUCCESS,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  muleAppStatus: IMuleAppStatus;
  muleAppStatusIsLoading: boolean;
  muleAppStatusHasErrored: boolean;
}>;

export const reducer = combineReducers<State>({
  muleAppStatus: (state = {}, action) => {
    switch (action.type) {
      case GET_MULE_APP_STATUS_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  },
  muleAppStatusIsLoading: (state = false, action) => {
    switch (action.type) {
      case GET_MULE_APP_STATUS_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  muleAppStatusHasErrored: (state = false, action) => {
    switch (action.type) {
      case GET_MULE_APP_STATUS_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
});
