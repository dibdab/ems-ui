import { MouseEvent } from 'react';

export interface ITableRowProps {
    tableData: any;
    showContextMenu: (target: HTMLElement, mousePos: { x: number, y: number }) => void;
    children: {};
}
