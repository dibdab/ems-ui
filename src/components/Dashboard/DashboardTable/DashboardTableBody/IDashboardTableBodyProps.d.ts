import { ISubscriber, ISubscriberFilter } from 'types/';

export interface IDashboardTableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[];
  filter: ISubscriberFilter;
  isLoading: boolean;
}
