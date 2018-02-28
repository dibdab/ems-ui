import { combineReducers } from 'redux';

import {
  SIDEBAR_IS_OPEN,
} from './';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  isOpen: boolean;
}>;

export const reducer = combineReducers<State>({
  isOpen: (state = true, action) => {
    switch (action.type) {
      case SIDEBAR_IS_OPEN:
        return action.payload;

      default:
        return state;
    }
  },
});
