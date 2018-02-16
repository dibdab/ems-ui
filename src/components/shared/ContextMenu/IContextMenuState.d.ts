import { MouseEvent } from 'react';

export interface IContextMenuState {
    isVisible: boolean;
    style: object;
    x: number;
    y: number;
    content: JSX.Element;
    menuTarget?: HTMLElement;
}
