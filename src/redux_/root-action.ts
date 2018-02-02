import { Actions as SubscriberActions } from './subscribers';

export { actionCreators as SubscriberActionCreators } from './subscribers';

// To add more types use union type
export type RootAction = SubscriberActions[keyof SubscriberActions];
