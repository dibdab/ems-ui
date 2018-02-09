import * as React from 'react';

import ISubscriberTableDataCellsProps from './ISubscriberTableDataCellsProps';
import { IFilter } from 'types';

export const SubscriberTableDataCells = (props: ISubscriberTableDataCellsProps) => {
    return (
        <React.Fragment>
            <td data-filter={{ event: props.subscriber.event.toString }}>
                {props.subscriber.event}
            </td>
            <td data-filter={{ listenerSystem: props.subscriber.listenerSystem.toString }}>
                {props.subscriber.listenerSystem}
            </td>
            <td data-filter={{ connector: (Object.keys(props.subscriber.connector)[0]).toString }}>
                {Object.keys(props.subscriber.connector)[0]}
            </td>
            <td className="filter-td">{constructFiltersCell(props.subscriber.filter)}</td>
        </React.Fragment>
    );
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
                        data-filter={{ name: filter.name, value: filter.value }}
                        data-filterlocation='filter'
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
