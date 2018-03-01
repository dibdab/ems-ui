import { ISubscriber, ISubscriberFilter, IEvent } from 'types';

import {
  TABLEDATA_IS_LOADING,
  TABLEDATA_FETCH_SUCCESS,
  TABLEDATA_HAS_ERRORED,
  TABLEDATA_FILTER_CHANGE,
} from './';
import { combineReducers } from 'redux';

// Set as Readonly to achieve immutability on nested types same with ReadonlyArray
export type State = Readonly<{
  tableData: ISubscriber[] | IEvent[];
  tableDataIsLoading: boolean;
  tableDataHasErrored: boolean;
  tableDataFilter: ISubscriberFilter | {};
}>;

export const reducer = combineReducers<State>({
  tableData: (state = [], action) => {
    switch (action.type) {
      case TABLEDATA_FETCH_SUCCESS:
        return action.payload;

      default:
        return state;
    }
  },
  tableDataIsLoading: (state = false, action) => {
    switch (action.type) {
      case TABLEDATA_IS_LOADING:
        return action.payload;

      default:
        return state;
    }
  },
  tableDataHasErrored: (state = false, action) => {
    switch (action.type) {
      case TABLEDATA_HAS_ERRORED:
        return action.payload;

      default:
        return state;
    }
  },
  tableDataFilter: (state = {}, action) => {
    switch (action.type) {
      case TABLEDATA_FILTER_CHANGE:
        return action.payload;

      default:
        return state;
    }
  },
});
