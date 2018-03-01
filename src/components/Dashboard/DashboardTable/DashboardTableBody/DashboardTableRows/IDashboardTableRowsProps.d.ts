import { ISubscriber, ISubscriberFilter, IEvent } from 'types';
import { Component } from 'react';

export interface IDashboardTableRowsProps {
    tableData: ISubscriber[] | IEvent[];
    columnKeyNames: string[];
    isLoading: boolean;
    hasErrored: boolean;
    filter: ISubscriberFilter;
    tableName: string;
}
