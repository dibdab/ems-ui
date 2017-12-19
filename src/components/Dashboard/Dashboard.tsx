import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import './Dashboard.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import TableView from './TableView/TableView';
import { IDashboardProps } from './IDashboardProps';
import { IRootState } from 'redux_';

export default class Dashboard extends React.Component<
  IDashboardProps,
  IRootState
> {
  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
        <div className="document-viewer">
          <Switch>
            <Route path="/dashboard/:tableName" component={TableView} />
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
