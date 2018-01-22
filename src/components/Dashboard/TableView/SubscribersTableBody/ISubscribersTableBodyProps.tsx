import { ISubscriber } from 'types/';

export interface ISubscribersTableBodyProps {
  subscribers: ISubscriber[];
  hasErrored: boolean;
  isLoading: boolean;
  getAllSubscribers: () => any;
}