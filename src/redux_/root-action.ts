import { Actions as EventsActions } from './events';
import { Actions as SubscribersActions } from './subscribers';
import { Actions as EventNameActions } from './eventNames';
import { Actions as SidebarActions } from './sidebar';
import { Actions as EventReplayActions } from './eventReplay';
import { Actions as MuleAppStatusActions } from './muleAppStatus';

export { actionCreators as EventsActionCreators } from './events';
export { actionCreators as SubscribersActionCreators } from './subscribers';
export { actionCreators as EventNameActionCreators } from './eventNames';
export { actionCreators as SidebarActionCreators } from './sidebar';
export { actionCreators as EventReplayActionCreators } from './eventReplay';
export { actionCreators as MuleAppStatusActionCreators } from './muleAppStatus';

// To add more types use union type
export type RootAction = EventsActions[keyof EventsActions] |
    SubscribersActions[keyof SubscribersActions] |
    EventNameActions[keyof EventNameActions] |
    SidebarActions[keyof SidebarActions] |
    EventReplayActions[keyof EventReplayActions] |
    MuleAppStatusActions[keyof MuleAppStatusActions];
