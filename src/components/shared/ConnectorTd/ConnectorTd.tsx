import * as React from 'react';

import { IJMSConnector } from 'types';

import IConnectorTdProps from './IConnectorTdProps';

export default function ConnectorTd(props: IConnectorTdProps) {
    const connector = props.connector;
    const connectorKey = Object.keys(connector);
    if (isJMS(connector)) {
        const connectorContents = connector.JMS;
        const connectorUrl = `${connectorContents.host}:${connectorContents.port}`;
        return (
            <React.Fragment>
                <td
                    title="connector"
                    className="dashboardTable-connector-td"
                    data-filter={JSON.stringify(connector.JMS)}
                    data-filterjsonlocation="connectorJMS"
                >
                    <div>{connectorKey} - {connectorContents.queue}</div>
                    <div>{connectorUrl}</div>
                </td>
            </React.Fragment>
        );
    } else {
        const connectorContents = connector.REST;
        const connectorUrl = `${connectorContents.host}:${connectorContents.port +
            connectorContents.path}`;
        return (
            <React.Fragment>
                <td
                    title="connector"
                    className="dashboardTable-connector-td"
                    data-filter={JSON.stringify(connector.REST)}
                    data-filterjsonlocation="connectorREST"
                >
                    <div>{connectorKey} - {connectorContents.method}</div>
                    <div>{connectorUrl}</div>
                </td>
            </React.Fragment>
        );
    }
}

function isJMS(connector: any): connector is IJMSConnector {
    return connector.REST === undefined;
}
