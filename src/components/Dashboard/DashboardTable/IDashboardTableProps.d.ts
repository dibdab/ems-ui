import * as router from 'react-router-dom';
import { IRoute, ISubscriber, ISubscriberFilter, IEventNames, IEvent, IEventFilter } from 'types';

export interface IDashboardTableProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[] | IEvent[];
  tableDataHasErrored: boolean;
  tableDataIsLoading: boolean;
  tableDataFilter: ISubscriberFilter | IEventFilter;
  allEventNames: IEventNames;
  allEventNamesIsLoading: boolean;
  allEventNamesHasErrored: boolean;
  subscribedEventNames: IEventNames;
  subscribedEventNamesIsLoading: boolean;
  subscribedEventNamesHasErrored: boolean;
}
