import { Actions as SubscriberActions } from './subscribers';

export type RootAction =
    | SubscriberActions[keyof SubscriberActions];