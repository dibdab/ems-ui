import * as React from 'react';

import IDashboardTableEventCellsProps from './IDashboardTableEventCellsProps';

export const DashboardTableEventCells = (props: IDashboardTableEventCellsProps) => {
    return (
        <React.Fragment>
            <td
                title="event"
                data-filter={props.event.event}
                data-filterjsonlocation="event"
            >
                {props.event.event}
            </td>
            <td
                title="listenerSystem"
                data-filter={props.event.sourceSystem}
                data-filterjsonlocation="sourceSystem"
            >
                {props.event.sourceSystem}
            </td>
        </React.Fragment>
    );
};
