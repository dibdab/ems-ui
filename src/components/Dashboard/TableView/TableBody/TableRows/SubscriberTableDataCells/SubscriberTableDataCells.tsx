import * as React from 'react';

import ISubscriberTableDataCellsProps from './ISubscriberTableDataCellsProps';
import { IFilter } from 'types';

export const SubscriberTableDataCells = (props: ISubscriberTableDataCellsProps) => {
    return (
        <React.Fragment>
            <td data-contextmenufilter={{ event: props.subscriber.event.toString }}>
                {props.subscriber.event}
            </td>
            <td data-contextmenufilter={{ listenerSystem: props.subscriber.listenerSystem.toString }}>
                {props.subscriber.listenerSystem}
            </td>
            <td data-contextmenufilter={{ connector: (Object.keys(props.subscriber.connector)[0]).toString }}>
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
    let contextMenuFilter = {};
    if (filters) {
        filters.map((filter, index) => {
            if (typeof filter.value === 'string' || typeof filter.value === 'boolean') {
                tdTextHead = `${filter.name}: `;
                tdText = `${filter.value}`;
            } else if (typeof filter.value === 'object') {
                const filterObjectKey = Object.keys(filter.value)[0];
                if (typeof filter.value[filterObjectKey] === 'object') {
                    const filterArray = filter.value[filterObjectKey];
                    let filterValues = '';
                    filterArray.map((value, filterArrayIndex) => {
                        filterValues += value;
                        if (filterArrayIndex + 1 !== filterArray.length) {
                            filterValues += ', ';
                        }
                    });
                    tdTextHead = `${filter.name} (${Object.keys(filter.value)}): `;
                    tdText = `${filterValues}`;
                    contextMenuFilter = { filter: { name: filter.name, value: filter.value } };
                } else if (typeof filter.value[filterObjectKey] === 'string') {
                    tdTextHead = `${filter.name} (${Object.keys(filter.value)}): `;
                    tdText = `${filter.value[filterObjectKey][0]}`;
                    contextMenuFilter = { filter: { name: filter.name, value: filter.value } };
                } else {
                    tdTextHead = 'Error:';
                    tdText = `Filter type of ${typeof filter.value} unhandled.`;
                }
            }
            filterCells.push(
                (
                    <div
                        data-contextmenufilter={contextMenuFilter}
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
