import * as React from 'react';

import FilterTd from 'components/shared/FilterTd/FilterTd';

import IDashboardTableEventCellsProps from './IDashboardTableEventCellsProps';

export const DashboardTableEventCells = (props: IDashboardTableEventCellsProps) => {
    return (
        <React.Fragment>
            <td
                title="event"
                data-filter={props.event.event}
                data-filterjsonlocation="event"
                data-filterNegative="false"
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
