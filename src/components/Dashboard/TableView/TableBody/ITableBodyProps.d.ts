import { ISubscriber, ISubscriberFilter } from 'types/';

export interface ITableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  subscribers: ISubscriber[];
  filter: ISubscriberFilter;
}
