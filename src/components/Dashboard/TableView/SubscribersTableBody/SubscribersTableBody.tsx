import * as React from 'react';
import { connect } from 'react-redux';

import './SubscribersTableBody.css';
import { ISubscribersTableBodyProps } from './ISubscribersTableBodyProps';
import { SubscriberService } from 'services';
import { IRootState } from 'redux_';
import { SubscriberActionCreators } from 'redux_';
import { Subscriber, RESTConnector, JMSConnector } from 'types';

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
    const subscribers = this.props.subscribers.map((subscriber: Subscriber) => (
      <tr key={subscriber._id.counter}>
        <td>{subscriber.event}</td>
        <td>{subscriber.listenerSystem}</td>
        <ConnectorTdComponent connector={subscriber.connector} />
      </tr>
    ));
    return <tbody>{subscribers}</tbody>;
  }
}

interface Props {
  connector: RESTConnector | JMSConnector;
}

const ConnectorTdComponent = (props: Props) => {
  const connector = props.connector;
  console.log(connector);
  if (isJMS(connector)) {
    const connectorContents = connector.JMS;
    return (
      <React.Fragment>
        <td>{Object.keys(connector)}</td>
        <td>{`${connectorContents.host}:${connectorContents.port}`}</td>
        <td>{connectorContents.queue}</td>
      </React.Fragment>
    );
  } else {
    const connectorContents = connector.REST;
    return (
      <React.Fragment>
        <td>{Object.keys(connector)}</td>
        <td>{`${connectorContents.host}:${connectorContents.port +
          connectorContents.path}`}</td>
        <td>{connectorContents.method}</td>
      </React.Fragment>
    );
  }
};

function isJMS(connector: any): connector is JMSConnector {
  return connector.REST === undefined;
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
