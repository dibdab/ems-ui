import * as React from 'react';

import ConnectorTd from 'components/shared/ConnectorTd/ConnectorTd';
import FilterTd from 'components/shared/FilterTd/FilterTd';

import ISubscriberCellsProps from './ISubscriberCellsProps';

export const SubscriberCells = (props: ISubscriberCellsProps) => {
    return (
        <React.Fragment>
            <td
                title="event"
                data-filter={props.subscriber.event}
                data-filterjsonlocation="event"
            >
                {props.subscriber.event}
            </td>
            <td
                title="listenerSystem"
                data-filter={props.subscriber.listenerSystem}
                data-filterjsonlocation="listenerSystem"
            >
                {props.subscriber.listenerSystem}
            </td>
            <ConnectorTd connector={props.subscriber.connector} />
            <FilterTd filters={props.subscriber.filter} />
        </React.Fragment>
    );
};
