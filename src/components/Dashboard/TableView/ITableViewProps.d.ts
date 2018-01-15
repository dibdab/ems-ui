import * as router from 'react-router-dom';
import { sidebarPaths } from 'enums';

export interface ITableViewProps {
  match: router.match<urlParams>;
}

type urlParams = { tableName: sidebarPaths };
