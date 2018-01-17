import * as React from 'react';
import { connect } from 'react-redux';

import './SubscribersTableBody.css';
import { ISubscribersTableBodyProps } from './ISubscribersTableBodyProps';

import { SubscriberService } from 'services';
import { IRootState } from 'redux_';
import { SubscriberActionCreators } from 'redux_';
import SubscriberTableRows from './SubscriberTableRows/SubscriberTableRows';
import ReactJson from 'react-json-view';
// import { JsonViewer } from 'components/shared/JsonViewer/JsonVeiwer'

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
      <React.Fragment>
        <tbody className="subscriberTableBody">
          <SubscriberTableRows subscribers={this.props.subscribers} />
          {console.log(this.props.subscribers[0])}
          {/* <JsonViewer data={this.props.subscribers[0]} /> */}
        </tbody>
        <ReactJson src={this.props.subscribers} />
      </React.Fragment>
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
