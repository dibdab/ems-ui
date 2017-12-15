import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './Dashboard.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import TableView from './TableView/TableView';
import { IDashboardProps } from './IDashboardProps';
import { SubscriberService } from 'services';
import { IRootState } from 'redux_';
import { SubscriberActionCreators } from 'redux_';

class Dashboard extends React.Component<IDashboardProps, IRootState> {
  componentDidMount() {
    SubscriberService.getAll;
  }

  render() {
    console.log(this.props.subscribers);
    // const subscribers = this.props.subscribers.map(subscriber => (
    //   <div className="row" key={subscriber._id.counter}>
    //     {subscriber.event}
    //   </div>
    // ));

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

const mapStateToProps = (state: IRootState) => {
  return {
    subscribers: state.subscribers.subscribers,
    hasErrored: state.subscribers.subscribersHasErrored,
    isLoading: state.subscribers.subscribersIsLoading,
  };
};

export default connect(mapStateToProps, {
  getAllSubscribers: SubscriberActionCreators.subscribersFetchSuccess,
})(Dashboard);
