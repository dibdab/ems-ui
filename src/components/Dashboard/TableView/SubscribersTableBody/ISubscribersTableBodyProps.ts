import { Subscriber } from 'types/Subscriber';

export interface ISubscribersTableBodyProps {
  subscribers: Subscriber[];
  hasErrored: boolean;
  isLoading: boolean;
  getAllSubscribers: () => any;
}
