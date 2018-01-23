import * as router from 'react-router-dom';
import { tableDataTypes } from 'enums';
import { IRoute } from 'types';
import { ISubscriber } from 'types/';

export interface ITableViewProps {
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
  subscribers: ISubscriber[];
  hasErrored: boolean;
  isLoading: boolean;
}

type urlParams = { tableName: tableDataTypes };
