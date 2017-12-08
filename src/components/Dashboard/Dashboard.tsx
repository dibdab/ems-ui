import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Dashboard.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import { DashboardProps } from './DashboardProps';

export default function Dashboard({
  currentDatabase,
  databaseArray,
  onSetCurrentDatabase
}: DashboardProps): JSX.Element {
  {
    return (
      <div>
        <Topbar databaseArray={databaseArray} />
        <Sidebar />       
        <div className="document-viewer">
        <Switch>
          <Route path="dashboard/:tableName" component={NoTableRoute} />
          <Route component={NoTableRoute} />
        </Switch>
        </div>
      </div>
    );
  }
}

function NoTableRoute(): JSX.Element {
  return <div>Select a event type to view events</div>;
}
