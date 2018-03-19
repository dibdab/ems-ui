import { ISubscriber, ISubscriberFilter, IEvent, IEventFilter } from 'types/';

export interface ITableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[] | IEvent[];
  isLoading: boolean;
  hasErrored: boolean;
  filter: ISubscriberFilter | IEventFilter;
}
