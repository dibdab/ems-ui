import * as React from 'react';
import { Switch } from 'react-router-dom';

import './Dashboard.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import TableView from './TableView/TableView';
import { IDashboardProps } from './IDashboardProps';
import { IRootState } from 'redux_';
import { RouteWithSubRoutes } from 'components/shared/RouteWithSubRoutes/RouteWithSubRoutes';
import { IRoute } from 'types';
import { tableDataTypes } from 'enums';

export default class Dashboard extends React.Component<
  IDashboardProps,
  IRootState
  > {
  render() {
    const routes: IRoute[] = [
      {
        component: TableView,
        path: '/dashboard/subscribers',
        routeProps: {
          // columns: [
          //   {
          //     columnHeading: 'Event Name',
          //     columnKeyName: 'event',
          //     columnValueType: 'Array'
          //   }
          // ]
          columnHeadings: [
            'Event Name',
            'Subscriber',
            'Connector',
            'Filters',
          ],
          columnKeyNames: [
            'event',
            'listenerSystem',
            'connector',
            'filter',
            'filter',
          ],
          tableName: tableDataTypes.Subscribers,
        },
      },
      {
        component: TableView,
        path: '/dashboard/test',
      },
      {
        component: NoTableRoute,
      },
    ];

    return (
      <div>
        <Topbar />
        <Sidebar />
        <div className="document-viewer">
          <Switch> {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))} </Switch>
        </div>
      </div>
    );
  }
}

function NoTableRoute(): JSX.Element {
  return <div>Select a event type to view events</div>;
}
