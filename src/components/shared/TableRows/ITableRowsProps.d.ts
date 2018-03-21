import { MouseEvent } from 'react';
import { ISubscriber, ISubscriberFilter, IEvent, IEventFilter } from 'types';

export interface ITableRowsProps {
    tableData: any;
    columnKeyNames: string[];
    isLoading: boolean;
    hasErrored: boolean;
    filter: ISubscriberFilter | IEventFilter;
    tableName: string;
    defaultTableText?: string;
    children: {};
}
