import { ISubscriber, ISubscriberFilter } from 'types';

// Define constants for actions names
export const TABLEDATA_IS_LOADING = 'TABLEDATA_IS_LOADING';
export const TABLEDATA_HAS_ERRORED = 'TABLEDATA_HAS_ERRORED';
export const TABLEDATA_FETCH_SUCCESS = 'TABLEDATA_FETCH_SUCCESS';
export const TABLEDATA_FILTER_CHANGE = 'TABLEDATA_FILTER_CHANGE';

// Define types for actions
export type Actions = {
  TABLEDATA_IS_LOADING: {
    type: typeof TABLEDATA_IS_LOADING;
    payload: boolean;
  };
  TABLEDATA_HAS_ERRORED: {
    type: typeof TABLEDATA_HAS_ERRORED;
    payload: boolean;
  };
  TABLEDATA_FETCH_SUCCESS: {
    type: typeof TABLEDATA_FETCH_SUCCESS;
    payload: ISubscriber[];
  };
  TABLEDATA_FILTER_CHANGE: {
    type: typeof TABLEDATA_FILTER_CHANGE;
    payload: ISubscriberFilter;
  };
};

// Create the actions
export const actionCreators = {
  tableDataIsLoading: (
    payload: boolean,
  ): Actions[typeof TABLEDATA_IS_LOADING] => ({
    type: TABLEDATA_IS_LOADING,
    payload,
  }),
  tableDataHasErrored: (
    payload: boolean,
  ): Actions[typeof TABLEDATA_HAS_ERRORED] => ({
    type: TABLEDATA_HAS_ERRORED,
    payload,
  }),
  tableDataFetchSuccess: (
    payload: ISubscriber[],
  ): Actions[typeof TABLEDATA_FETCH_SUCCESS] => ({
    type: TABLEDATA_FETCH_SUCCESS,
    payload,
  }),
  tableDataFilterChange: (
    payload: ISubscriberFilter,
  ): Actions[typeof TABLEDATA_FILTER_CHANGE] => ({
    type: TABLEDATA_FILTER_CHANGE,
    payload,
  }),
};
