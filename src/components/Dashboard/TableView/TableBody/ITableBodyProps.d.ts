import { ISubscriber, ISubscriberFilter } from 'types/';

export interface ITableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  tableData: ISubscriber[];
  filter: ISubscriberFilter;
  isLoading: boolean;
}
