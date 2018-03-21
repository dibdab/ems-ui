import * as router from 'react-router-dom';
import { IEvent, IEventFilter } from 'types';

export interface IEventsTableBodyProps {
  columnKeyNames: string[];
  events: IEvent[];
  eventsHasErrored: boolean;
  eventsIsLoading: boolean;
  eventsFilter: IEventFilter;
}
