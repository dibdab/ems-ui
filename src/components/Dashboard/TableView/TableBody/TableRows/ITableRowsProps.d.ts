import { ISubscriber } from 'types';
import { Component } from 'react';

export interface ITableRowsProps {
    tableData: ISubscriber[];
    columnKeyNames: string[];
}
