import * as router from 'react-router-dom';
import { IRoute, ISubscriber, ISubscriberFilter, IEventNames } from 'types';

export interface IDashboardTableProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[];
  tableDataHasErrored: boolean;
  tableDataIsLoading: boolean;
  tableDataFilter: ISubscriberFilter;
  allEventNames: IEventNames;
  allEventNamesIsLoading: boolean;
  allEventNamesHasErrored: boolean;
  subscribedEventNames: IEventNames;
  subscribedEventNamesIsLoading: boolean;
  subscribedEventNamesHasErrored: boolean;
}
