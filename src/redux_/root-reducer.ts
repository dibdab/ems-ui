import { combineReducers } from 'redux';

import {
  reducer as events,
  State as EventsState,
} from './events';

import {
  reducer as subscribers,
  State as SubscribersState,
} from './subscribers';

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
  events: EventsState;
  subscribers: SubscribersState;
  eventNames: EventNamesState;
  sidebar: SidebarState;
}

export const rootReducer = combineReducers<IRootState>({
  events,
  subscribers,
  eventNames,
  sidebar,
});
