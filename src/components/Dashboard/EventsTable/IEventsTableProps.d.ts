import * as router from 'react-router-dom';
import { IEventNames, IEvent, IEventFilter } from 'types';

export interface IEventsTableProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  events: IEvent[];
  eventsHasErrored: boolean;
  eventsIsLoading: boolean;
  eventsFilter: IEventFilter;
  allEventNames: IEventNames;
  allEventNamesIsLoading: boolean;
  allEventNamesHasErrored: boolean;
}
