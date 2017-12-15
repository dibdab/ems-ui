import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './TableView.css';
import { ITableViewProps } from './ITableViewProps';
import SubscribersTableRow from './SubscribersTableRow/SubscribersTableRow';

export default function TableView({  }: ITableViewProps): JSX.Element {
  {
    return (
      <div>
        <div className="button-group elevation-2">
          <button className="button">View</button>
          <button className="button">Add</button>
          <button className="button">Delete</button>
        </div>
        <Switch>
          <Route path="/dashboard/:tableName" component={SubscribersTableRow} />
        </Switch>
      </div>
    );
  }
}
