import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Subscriber } from '../../types/Subscriber';

import './Dashboard.css';
import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import { IDashboardProps } from './IDashboardProps';
import { getAllSubscribers } from '../../services/subscribers';
import { IRootState } from '../../redux/index';
import { actionCreators } from '../../redux/subscribers/index';
import store from '../../store';

class Dashboard extends React.Component<IDashboardProps, IRootState> {
  componentDidMount() {
    getAllSubscribers();
    console.log('1');
    store.dispatch(actionCreators.subscribersHasErrored(true));
  }

  render() {
    console.log(this.props.subscribers);
    const subscribers = this.props.subscribers.map(subscriber => (
      <div className="row" key={subscriber._id.counter}>
        {subscriber.event}
      </div>
    ));

    return (
      <div>
        <Topbar />
        <Sidebar />
        <div className="document-viewer">
          <Switch>
            <Route path="dashboard/:tableName" component={NoTableRoute} />
            <Route component={NoTableRoute} />
          </Switch>
          <div>{subscribers}</div>
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
  getAllSubscribers: actionCreators.subscribersFetchSuccess,
})(Dashboard);
