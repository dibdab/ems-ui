import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ITableViewProps } from './ITableViewProps';
import { sidebarPaths } from 'enums';

import { TableHeaders } from './TableHeaders/TableHeaders';
import SubscribersTableBody from './SubscribersTableBody/SubscribersTableBody';
import TestTableRow from './TestTableRow/TestTableRow';

export default function TableView(props: ITableViewProps): JSX.Element {
  {
    // Define headers for table
    let tableHeaders: string[] = [];
    switch (props.match.params.tableName) {
      case sidebarPaths.Subscribers:
        tableHeaders = [
          'Event Type',
          'Subscriber',
          'Connector Type',
          'Connector Url',
          'Connector Method/Queue',
        ];
        break;
      case sidebarPaths.Test:
        tableHeaders = ['testHeader'];
        break;
      default:
        tableHeaders = [
          'You should not be here, guess you broke the website... You should probably leave now.',
        ];
        break;
    }

    return (
      <div>
        <table className="dashboardTable">
          <TableHeaders orderedColumnNames={tableHeaders} />
          <Switch>
            <Route
              path="/dashboard/subscribers"
              component={SubscribersTableBody}
            />
            <Route path="/dashboard/test" component={TestTableRow} />
          </Switch>
        </table>
      </div>
    );
  }
}
