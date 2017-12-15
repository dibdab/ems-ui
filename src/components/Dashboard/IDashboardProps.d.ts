import { match } from 'react-router';
import { Subscriber } from '../../types/Subscriber';

export interface IDashboardProps {
  subscribers: Subscriber[];
  hasErrored: boolean;
  isLoading: boolean;
  getAllSubscribers: () => any;
}
