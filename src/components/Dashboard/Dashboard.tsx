import * as React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import store from 'store';

import './Dashboard.css';
import { Topbar } from 'components/shared/Topbar/Topbar';
import { Sidebar } from 'components/shared/Sidebar/Sidebar';
import DashboardTable from './DashboardTable/DashboardTable';
import { IDashboardProps } from './IDashboardProps';
import { IRootState } from 'redux_';
import { RouteWithSubRoutes } from 'components/shared/RouteWithSubRoutes/RouteWithSubRoutes';
import { IRoute } from 'types';
import { tableTypes } from 'enums';
import { SidebarCreators } from 'redux_';

class Dashboard extends React.Component<
  IDashboardProps,
  IRootState
  > {
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  onWindowResize() {
    if (window.innerWidth >= 1480) {
      store.dispatch(SidebarCreators.isOpen(true));
    } else if (window.innerWidth < 1480) {
      store.dispatch(SidebarCreators.isOpen(false));
    }
  }

  render() {
    const routes: IRoute[] = [
      {
        component: DashboardTable,
        path: '/dashboard/subscribers',
        routeProps: {
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
          ],
          tableName: tableTypes.Subscribers,
        },
      },
      {
        component: DashboardTable,
        path: '/dashboard/events',
        routeProps: {
          columnHeadings: [
            'Event Name',
            'Source System',
            'Received Date',
            'Filters',
          ],
          columnKeyNames: [
            'event',
            'sourceSystem',
            'receivedDate',
            'filter',
          ],
          tableName: tableTypes.Events,
        },
      },
      {
        component: NoTableRoute,
      },
    ];

    const isSidebarOpenClass = this.props.isSidebarOpen
      ? 'sidebar-open'
      : 'sidebar-closed';

    return (
      <React.Fragment>
        <Topbar isSidebarOpen={this.props.isSidebarOpen} />
        <Sidebar isSidebarOpen={this.props.isSidebarOpen} />
        <div className={`dashboard-container ${isSidebarOpenClass}`}>
          <Switch> {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))} </Switch>
        </div>
      </React.Fragment>
    );
  }
}

function NoTableRoute(): JSX.Element {
  return <div>Select a event type to view events.</div>;
}

const mapStateToProps = (state: IRootState) => {
  return {
    isSidebarOpen: state.sidebar.isOpen,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
