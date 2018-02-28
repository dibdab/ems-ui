import { combineReducers } from 'redux';

import {
  reducer as tableData,
  State as TableDataState,
} from './tableData';

import {
  reducer as eventNames,
  State as EventNamesState,
} from './eventNames';

import {
  reducer as sidebar,
  State as SidebarState,
} from './sidebar';

interface IStoreEnhancerState { }

// Reducer alias and property key in IRootState need to match
export interface IRootState extends IStoreEnhancerState {
  tableData: TableDataState;
  eventNames: EventNamesState;
  sidebar: SidebarState;
}

export const rootReducer = combineReducers<IRootState>({
  tableData,
  eventNames,
  sidebar,
});
