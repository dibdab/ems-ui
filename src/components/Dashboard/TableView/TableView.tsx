import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './TableView.css';
import { ITableViewProps } from './ITableViewProps';
import SubscribersTableBody from './SubscribersTableBody/SubscribersTableBody';
import TestTableRow from './TestTableRow/TestTableRow';

export default function TableView({  }: ITableViewProps): JSX.Element {
  {
    return (
      <div>
        <table>
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
