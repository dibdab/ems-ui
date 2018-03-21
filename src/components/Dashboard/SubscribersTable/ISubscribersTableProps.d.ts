import * as router from 'react-router-dom';
import { IRoute, ISubscriber, ISubscriberFilter, IEventNames } from 'types';

export interface ISubscribersTableProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  subscribers: ISubscriber[];
  subscribersHasErrored: boolean;
  subscribersIsLoading: boolean;
  subscribersFilter: ISubscriberFilter;
  subscribedEventNames: IEventNames;
  subscribedEventNamesIsLoading: boolean;
  subscribedEventNamesHasErrored: boolean;
}
