import { ISubscriber, ISubscriberFilter, IEvent } from 'types/';

export interface IDashboardTableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[] | IEvent[];
  isLoading: boolean;
  hasErrored: boolean;
  filter: ISubscriberFilter;
}
