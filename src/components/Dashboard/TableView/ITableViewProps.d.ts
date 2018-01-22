import * as router from 'react-router-dom';
import { sidebarPaths } from 'enums';
import { IRoute } from 'types';

export interface ITableViewProps {
  match: router.match<urlParams>;
  routes: IRoute[]
  columnHeadings: string[];
  columnKeyNames: string[];
  tableName: string;
}

type urlParams = { tableName: sidebarPaths };
