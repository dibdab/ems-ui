import { Actions as TableDataActions } from './subscribers';

export { actionCreators as TableDataActionCreators } from './subscribers';

// To add more types use union type
export type RootAction = TableDataActions[keyof TableDataActions];
