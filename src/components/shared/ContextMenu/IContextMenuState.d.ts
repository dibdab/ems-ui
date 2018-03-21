import { MouseEvent } from 'react';

export interface IContextMenuState {
    style: object;
    x: number;
    y: number;
    content: JSX.Element;
    menuTarget?: HTMLElement;
}
