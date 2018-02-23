import { combineReducers } from 'redux';

import {
  reducer as tableData,
  State as TableDataState,
} from './subscribers';
interface IStoreEnhancerState { }

export interface IRootState extends IStoreEnhancerState {
  tableData: TableDataState;
}

export const rootReducer = combineReducers<IRootState>({
  tableData,
});
