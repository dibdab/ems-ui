import { Actions as SubscriberActions } from './subscribers';

export { actionCreators as SubscriberActionCreators } from './subscribers';

//add more types as union type
export type RootAction = SubscriberActions[keyof SubscriberActions]; 
