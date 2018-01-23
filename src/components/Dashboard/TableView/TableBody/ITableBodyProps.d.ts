import { ISubscriber } from 'types/';

export interface ITableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  subscribers: ISubscriber[];
}
