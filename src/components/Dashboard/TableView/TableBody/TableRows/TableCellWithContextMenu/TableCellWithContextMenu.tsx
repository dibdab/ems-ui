import * as React from 'react';

import ITableCellWithContextMenuProps from './ITableCellWithContextMenuProps';
import './TableCellWithContextMenu.css';

export const TableCellWithContextMenu = (props: ITableCellWithContextMenuProps) => {
    return (
        <td onContextMenu={props.showContextMenu()}>
            {props.children}
        </td>
    )
};



