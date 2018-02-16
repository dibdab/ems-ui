import * as React from 'react';

import ISubscriberTableDataCellsProps from './ISubscriberTableDataCellsProps';
import { IFilter, IJMSConnector, IRESTConnector } from 'types';

export const SubscriberTableDataCells = (props: ISubscriberTableDataCellsProps) => {
    return (
        <React.Fragment>
            <td data-filter={props.subscriber.event} data-filterjsonlocation='event'>
                {props.subscriber.event}
            </td>
            <td data-filter={props.subscriber.listenerSystem} data-filterjsonlocation='listenerSystem'>
                {props.subscriber.listenerSystem}
            </td>
            <ConnectorTdComponent connector={props.subscriber.connector} />
            <td className="filter-td">{constructFiltersCell(props.subscriber.filter)}</td>
        </React.Fragment>
    );
};
interface IConnectorTdComponentProps {
    connector: IRESTConnector | IJMSConnector;
}

function isJMS(connector: any): connector is IJMSConnector {
    return connector.REST === undefined;
}

const ConnectorTdComponent = (props: IConnectorTdComponentProps) => {
    const connector = props.connector;
    const connectorKey = Object.keys(connector);
    if (isJMS(connector)) {
        const connectorContents = connector.JMS;
        const connectorUrl = `${connectorContents.host}:${connectorContents.port}`;
        return (
            <React.Fragment>
                <td className="connectorCell" data-filter={JSON.stringify(connector.JMS)} data-filterjsonlocation='connectorJMS'>
                    <div>{connectorKey}</div>
                    <div>{connectorUrl}</div>
                    <div>{connectorContents.queue}</div>
                </td>
            </React.Fragment>
        );
    } else {
        const connectorContents = connector.REST;
        const connectorUrl = `${connectorContents.host}:${connectorContents.port +
            connectorContents.path}`;
        console.log(JSON.stringify(connector))
        return (
            <React.Fragment>
                <td className="connectorCell" data-filter={JSON.stringify(connector.REST)} data-filterjsonlocation='connectorREST'>
                    <div>{connectorKey}</div>
                    <div>{connectorUrl}</div>
                    <div>{connectorContents.method}</div>
                </td>
            </React.Fragment>
        );
    }
};

function constructFiltersCell(filters: IFilter[]) {
    const filterCells: JSX.Element[] = [];
    let tdText = '';
    let tdTextHead = '';
    if (filters) {
        filters.map((filter, index) => {
            if (typeof filter.value === 'string' || typeof filter.value === 'boolean') {
                tdTextHead = `${filter.name}: `;
                tdText = `${filter.value}`;
            } else if (typeof filter.value === 'object') {
                const filterObjectKey: string = Object.keys(filter.value)[0];
                if (typeof filter.value[filterObjectKey] === 'object') {
                    tdTextHead = `${filter.name} (${filterObjectKey}): `;
                    tdText = `${filter.value[filterObjectKey].join(', ')}`;
                } else if (typeof filter.value[filterObjectKey] === 'string') {
                    tdTextHead = `${filter.name} (${filterObjectKey}): `;
                    tdText = `${filter.value[filterObjectKey][0]}`;
                } else {
                    tdTextHead = 'Error:';
                    tdText = `Filter type of ${typeof filter.value} unhandled.`;
                }
            }
            filterCells.push(
                (
                    <div
                        data-filter={JSON.stringify({ name: filter.name, value: filter.value })}
                        data-filterjsonlocation='filter'
                        key={index + tdTextHead}
                    >
                        <b>{tdTextHead}</b>{tdText}<br />
                    </div>
                ),
            );
        });
    } else {
        filterCells.push(<div key="key">No Filters</div>);
    }
    return filterCells;
}