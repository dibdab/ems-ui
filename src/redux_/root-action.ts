import { Actions as TableDataActions } from './tableData';
import { Actions as EventNameActions } from './eventNames';
import { Actions as SidebarActions } from './sidebar';

export { actionCreators as TableDataActionCreators } from './tableData';
export { actionCreators as EventNameCreators } from './eventNames';
export { actionCreators as SidebarCreators } from './sidebar';

// To add more types use union type
export type RootAction = TableDataActions[keyof TableDataActions] |
    EventNameActions[keyof EventNameActions] |
    SidebarActions[keyof SidebarActions];
