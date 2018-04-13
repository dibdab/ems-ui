import * as React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

import store from 'store';
import Topbar from 'components/shared/Topbar/Topbar';
import Sidebar from 'components/shared/Sidebar/Sidebar';
import { IRootState, SidebarActionCreators } from 'redux_';
import { RouteWithSubRoutes } from 'components/shared/RouteWithSubRoutes/RouteWithSubRoutes';
import { IRoute } from 'types';
import { tableTypes } from 'enums';

import './Dashboard.css';
import { IDashboardProps } from './IDashboardProps';
import EventsTable from './EventsTable/EventsTable';
import SubscribersTable from './SubscribersTable/SubscribersTable';
import EventReplayForm from './EventReplayForm/EventReplayForm';
import MuleAppStatus from './MuleAppStatus/MuleAppStatus';

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
      store.dispatch(SidebarActionCreators.isOpen(true));
    } else if (window.innerWidth < 1480) {
      store.dispatch(SidebarActionCreators.isOpen(false));
    }
  }

  render() {
    const routes: IRoute[] = [
      {
        component: SubscribersTable,
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
        component: EventsTable,
        path: '/dashboard/events',
        routeProps: {
          columnHeadings: [
            'Message ID',
            'Event Name',
            'Source System',
            'Received Date',
            'Filters',
          ],
          columnKeyNames: [
            'messageID',
            'event',
            'sourceSystem',
            'receivedDate',
            'filter',
          ],
          tableName: tableTypes.Events,
        },
      },
      {
        component: EventReplayForm,
        path: '/dashboard/eventreplay',
        routeProps: {
          response: this.props.eventReplayResponse,
          isLoading: this.props.eventReplayIsLoading,
          hasErrored: this.props.eventReplayHasErrored,
          messageID: this.props.eventReplayMessageID,
        },
      },
      {
        component: MuleAppStatus,
        path: '/dashboard/muleappstatus',
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
  return <div>Select a sidebar option.</div>;
}

const mapStateToProps = (state: IRootState) => {
  return {
    isSidebarOpen: state.sidebar.isOpen,
    eventReplayResponse: state.eventReplay.eventReplayResponse,
    eventReplayIsLoading: state.eventReplay.eventReplayIsLoading,
    eventReplayHasErrored: state.eventReplay.eventReplayHasErrored,
    eventReplayMessageID: state.eventReplay.eventReplayMessageID,
  };
};

export default connect(mapStateToProps, {})(Dashboard);
