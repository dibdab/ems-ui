import { ISubscriber, ISubscriberFilter, IEventFilter } from 'types';

export interface IContextMenuProps {
    renderTag: string;
    dataType: string;
    filter: ISubscriberFilter | IEventFilter;
    isVisible: boolean;
    hide: () => void;
    target?: HTMLElement;
    pos?: { x: number, y: number };
}
