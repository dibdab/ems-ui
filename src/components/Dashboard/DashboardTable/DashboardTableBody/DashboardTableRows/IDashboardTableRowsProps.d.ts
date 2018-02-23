import { ISubscriber, ISubscriberFilter } from 'types';
import { Component } from 'react';

export interface IDashboardTableRowsProps {
    tableData: ISubscriber[];
    columnKeyNames: string[];
    filter: ISubscriberFilter;
    isLoading: boolean;
}
