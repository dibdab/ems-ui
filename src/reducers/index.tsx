import { SetCurrentDatabaseAction } from '../actions';
import { StoreState } from '../types';
import { SET_CURRENT_DATABASE } from '../constants';

export function database(
  state: StoreState,
  action: SetCurrentDatabaseAction
): StoreState {
  // tslint:disable-next-line:switch-default
  switch (action.type) {
    case SET_CURRENT_DATABASE:
      return { ...state, currentDatabase: state.currentDatabase };
  }
  return state;
}
