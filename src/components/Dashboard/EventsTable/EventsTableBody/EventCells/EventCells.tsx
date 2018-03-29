import * as React from 'react';

import FilterTd from 'components/shared/FilterTd/FilterTd';

import IEventCellsProps from './IEventCellsProps';

export const EventCells = (props: IEventCellsProps) => {
    return (
        <React.Fragment>
            <td
                title="messageID"
                data-filter={props.event.messageID}
                data-filterjsonlocation="messageID"
                data-filternegative="false"
            >
                {props.event.messageID}
            </td>
            <td
                title="event"
                data-filter={props.event.event}
                data-filterjsonlocation="event"
                data-filternegative="false"
            >
                {props.event.event}
            </td>
            <td
                title="sourceSystem"
                data-filter={props.event.sourceSystem}
                data-filterjsonlocation="sourceSystem"
            >

                {props.event.sourceSystem}
            </td>
            <td
                title="receivedDate"
                data-filter={props.event.receivedDate}
                data-filterjsonlocation="receivedDate"
            >
                {props.event.receivedDate}
            </td>
            <FilterTd filters={props.event.filter} />
        </React.Fragment>
    );
};
