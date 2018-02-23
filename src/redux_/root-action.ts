import { Actions as TableDataActions } from './tableData';

export { actionCreators as TableDataActionCreators } from './tableData';

// To add more types use union type
export type RootAction = TableDataActions[keyof TableDataActions];
