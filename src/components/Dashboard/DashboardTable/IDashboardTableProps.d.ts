import * as router from 'react-router-dom';
import { tableDataTypes } from 'enums';
import { IRoute, ISubscriberFilter } from 'types';
import { ISubscriber } from 'types/';

export interface IDashboardTableProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[];
  tableDataHasErrored: boolean;
  tableDataIsLoading: boolean;
  tableDataFilter: ISubscriberFilter;
}

type urlParams = { tableName: tableDataTypes };
