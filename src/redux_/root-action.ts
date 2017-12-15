import { Actions as SubscriberActions } from './subscribers';

export { actionCreators as SubscriberActionCreators } from './subscribers';

export type RootAction = SubscriberActions[keyof SubscriberActions];
