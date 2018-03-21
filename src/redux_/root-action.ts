import { Actions as EventsActions } from './events';
import { Actions as SubscribersActions } from './subscribers';
import { Actions as EventNameActions } from './eventNames';
import { Actions as SidebarActions } from './sidebar';

export { actionCreators as EventsActionCreators } from './events';
export { actionCreators as SubscribersActionCreators } from './subscribers';
export { actionCreators as EventNameCreators } from './eventNames';
export { actionCreators as SidebarCreators } from './sidebar';

// To add more types use union type
export type RootAction = EventsActions[keyof EventsActions] |
    SubscribersActions[keyof SubscribersActions] |
    EventNameActions[keyof EventNameActions] |
    SidebarActions[keyof SidebarActions];
