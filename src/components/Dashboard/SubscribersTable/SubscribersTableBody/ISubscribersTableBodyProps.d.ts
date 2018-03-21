import * as router from 'react-router-dom';
import { ISubscriber, ISubscriberFilter } from 'types';

export interface ISubscribersTableBodyProps {
  columnKeyNames: string[];
  subscribers: ISubscriber[];
  subscribersHasErrored: boolean;
  subscribersIsLoading: boolean;
  subscribersFilter: ISubscriberFilter;
}
