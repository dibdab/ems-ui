import { combineReducers } from 'redux';

import {
  reducer as subscribers,
  State as SubscriberState,
} from './subscribers';

interface IStoreEnhancerState {}

export interface IRootState extends IStoreEnhancerState {
  subscribers: SubscriberState;
}

import { RootAction } from './';
export const rootReducer = combineReducers<IRootState>({
  subscribers,
});
