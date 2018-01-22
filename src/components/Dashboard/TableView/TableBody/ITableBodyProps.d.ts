import { ISubscriber } from 'types/';

export interface ITableBodyProps {
  columnKeyNames: string[];
  tableName: string;
  hasErrored: boolean;
  isLoading: boolean;
  subscribers: ISubscriber[];
  getAllSubscribers: () => any;
}
