import { SetCurrentDatabaseAction } from '../actions';
import { StoreState } from '../types';
import { SET_CURRENT_DATABASE } from '../constants';

export function emsUi(
  state: StoreState,
  action: SetCurrentDatabaseAction
): StoreState {
  switch (action.type) {
    case SET_CURRENT_DATABASE:
      return { ...state, currentDatabase: state.currentDatabase };
  }
  return state;
}
