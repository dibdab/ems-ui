import { MouseEvent } from 'react';

export interface ITableRowsState {
    isContextMenuVisible: boolean;
    contextMenuTarget?: MouseEvent<HTMLElement>;
}
