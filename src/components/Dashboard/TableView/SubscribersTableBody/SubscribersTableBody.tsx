import * as React from 'react';
import { connect } from 'react-redux';

import './SubscribersTableBody.css';
import { ISubscribersTableBodyProps } from './ISubscribersTableBodyProps';

import { SubscriberService } from 'services';
import { IRootState } from 'redux_';
import { SubscriberActionCreators } from 'redux_';
import SubscriberTableRows from './SubscriberTableRows/SubscriberTableRows';

class SubscribersTableBody extends React.Component<
  ISubscribersTableBodyProps,
  IRootState
> {
  componentDidMount() {
    // TODO: Force reload of data to skip cache button
    // TODO: Implment isLoading and hasErroed bools
    SubscriberService.getAll();
  }

  render() {
    return (
      <tbody className="subscriberTableBody">
        <SubscriberTableRows subscribers={this.props.subscribers} />
      </tbody>
    );
  }
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
})(SubscribersTableBody);
