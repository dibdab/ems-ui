import { ISubscriber, ISubscriberFilter, IEvent, IEventFilter } from 'types';
import { Component } from 'react';

export interface ITableRowsProps {
    tableData: ISubscriber[] | IEvent[];
    columnKeyNames: string[];
    isLoading: boolean;
    hasErrored: boolean;
    filter: ISubscriberFilter | IEventFilter;
    tableName: string;
}
