import * as React from 'react';
import { connect } from 'react-redux';

import './SubscribersTableBody.css';
import { ISubscribersTableBodyProps } from './ISubscribersTableBodyProps';
import { SubscriberService } from 'services';
import { IRootState } from 'redux_';
import { SubscriberActionCreators } from 'redux_';

class SubscribersTableBody extends React.Component<
  ISubscribersTableBodyProps,
  IRootState
> {
  componentDidMount() {
    SubscriberService.getAll;
    console.log(this.props.subscribers);
  }

  render() {
    const subscribers = this.props.subscribers.map(subscriber => (
      <tr key={subscriber._id.counter}>
        <td>{subscriber.event}</td>
      </tr>
    ));
    return <tbody>{subscribers}</tbody>;
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
