import * as React from 'react';
import { MouseEvent } from 'react';

import './SubscriberTableRows.css';
import { ISubscriberTableRowsProps } from './ISubscriberTableRowsProps';
import { ISubscriberTableRowsState } from './ISubscriberTableRowsState';

import { ISubscriber, IRESTConnector, IJMSConnector } from 'types';
// import { SubscriberTableRow } from './SubscriberTableRow/SubscriberTableRow';
// import { SubscriberAccordionTableRow } from './SubscriberAccordionTableRow/SubscriberAccordionTableRow';
import { AccordionTableRow } from 'components/shared/AccordionTableRow/AccordionTableRow';

export default class SubscriberTableRows extends React.Component<
  ISubscriberTableRowsProps,
  ISubscriberTableRowsState
  > {
  constructor(props: ISubscriberTableRowsProps) {
    super(props);
    this.state = {
      visibleAccordion: {},
    };

    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(event: MouseEvent<HTMLTableRowElement>) {
    event.persist();
    console.log(event.currentTarget, 'current target');
    if (event.currentTarget.id in this.state.visibleAccordion) {
      this.setState({
        visibleAccordion: {
          [event.currentTarget.id]: !this.state.visibleAccordion[
            event.currentTarget.id
          ],
        },
      });
    } else {
      this.setState({
        visibleAccordion: {
          [event.currentTarget.id]: true,
        },
      });
    }
  }

  inputStopPropagation(event: MouseEvent<HTMLInputElement>) {
    event.stopPropagation();
  }

  render() {
    const subscribers = this.props.subscribers.map((subscriber: ISubscriber) => (
      <React.Fragment key={subscriber._id.counter}>
        <tr onClick={this.toggleAccordion} id={`${subscriber._id.counter}`}>
          <td>
            <input type="checkbox" onClick={this.inputStopPropagation} />
          </td>
          <td>{subscriber.event}</td>
          <td>{subscriber.listenerSystem}</td>
          <ConnectorTdComponent connector={subscriber.connector} />
        </tr>
        <AccordionTableRow
          accordionId={`${subscriber._id.counter}`}
          jsonData={subscriber}
          isAccordionVisible={
            this.state.visibleAccordion[`${subscriber._id.counter}`]
          }
        >
          <td className="accordionTd" colSpan={6} />
        </AccordionTableRow>
      </React.Fragment>
    ));
    return <React.Fragment>{subscribers}</React.Fragment>;
  }
}

interface IConnectorTdComponentProps {
  connector: IRESTConnector | IJMSConnector;
}

function isJMS(connector: any): connector is IJMSConnector {
  return connector.REST === undefined;
}

const ConnectorTdComponent = (props: IConnectorTdComponentProps) => {
  const connector = props.connector;
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
