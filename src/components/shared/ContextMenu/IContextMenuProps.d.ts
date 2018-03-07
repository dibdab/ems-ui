import { ISubscriber, ISubscriberFilter, IEventFilter } from 'types';

export interface IContextMenuProps {
    renderTag: string;
    filter: ISubscriberFilter | IEventFilter;
}
