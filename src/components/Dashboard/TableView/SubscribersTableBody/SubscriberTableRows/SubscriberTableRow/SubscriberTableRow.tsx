import * as React from 'react';

import './SubscriberTableRow.css';
import { ISubscriberTableRowProps } from './ISubscriberTableRowProps';

import { RESTConnector, JMSConnector } from 'types';

export const SubscriberTableRow = (props: ISubscriberTableRowProps) => {
  return (
    <tr>
      <td>[]</td>
      <td>{props.subscriber.event}</td>
      <td>{props.subscriber.listenerSystem}</td>
      <ConnectorTdComponent connector={props.subscriber.connector} />
    </tr>
  );
};

interface IConnectorTdComponentProps {
  connector: RESTConnector | JMSConnector;
}

function isJMS(connector: any): connector is JMSConnector {
  return connector.REST === undefined;
}

const ConnectorTdComponent = (props: IConnectorTdComponentProps) => {
  const connector = props.connector;
  console.log(connector);
  if (isJMS(connector)) {
    const connectorContents = connector.JMS;
    const connectorUrl = `${connectorContents.host}:${connectorContents.port}`;
    return (
      <React.Fragment>
        <td>{Object.keys(connector)}</td>
        <td title={connectorUrl}>{connectorUrl}</td>
        <td>{connectorContents.queue}</td>
      </React.Fragment>
    );
  } else {
    const connectorContents = connector.REST;
    const connectorUrl = `${connectorContents.host}:${connectorContents.port +
      connectorContents.path}`;
    return (
      <React.Fragment>
        <td>{Object.keys(connector)}</td>
        <td title={connectorUrl}>{connectorUrl} </td>
        <td>{connectorContents.method}</td>
      </React.Fragment>
    );
  }
};
