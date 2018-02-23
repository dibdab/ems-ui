import * as router from 'react-router-dom';
import { tableDataTypes } from 'enums';
import { IRoute, ISubscriberFilter } from 'types';
import { ISubscriber } from 'types/';

export interface IDashboardTableProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[];
  hasErrored: boolean;
  isLoading: boolean;
  filter: ISubscriberFilter;
}

type urlParams = { tableName: tableDataTypes };
