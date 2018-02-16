import { ISubscriber, ISubscriberFilter } from 'types';
import { Component } from 'react';

export interface ITableRowsProps {
    tableData: ISubscriber[];
    columnKeyNames: string[];
    filter: ISubscriberFilter;
}
