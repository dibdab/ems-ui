import * as React from 'react';

import ISubscriberTableDataCellsProps from './ISubscriberTableDataCellsProps';

export const SubscriberTableDataCells = (props: ISubscriberTableDataCellsProps) => {
    const filterCells: JSX.Element[] = [];
    let tdText = '';
    let tdTextHead = '';
    console.log(props.subscriber, "subscriber");
    if (props.subscriber.filter) {


        props.subscriber.filter.map((filter, index) => {
            if (typeof filter.value === 'string' || typeof filter.value === 'boolean') {
                tdTextHead = `${filter.name}: `
                tdText = `${filter.value}`;
            } else if (typeof filter.value === 'object') {
                const filterObjectKey = Object.keys(filter.value)[0];
                if (typeof filter.value[filterObjectKey] === 'object') {
                    const filterArray = filter.value[filterObjectKey];
                    let filterValues = '';
                    filterArray.map((value, index) => {
                        filterValues += value;
                        if (index + 1 !== filterArray.length)
                            filterValues += ', ';
                    });
                    console.log(filterValues)
                    tdTextHead = `${filter.name} (${Object.keys(filter.value)}): `
                    tdText = `${filterValues}`;
                } else if (typeof filter.value[filterObjectKey] === 'string') {
                    tdTextHead = `${filter.name} (${Object.keys(filter.value)}): `
                    tdText = `${filter.value[filterObjectKey][0]}`;
                }
                else {
                    tdText = 'filter value unhandled';
                }
            }
            filterCells.push(<td key={`${filter.name}${index}`} data-key={filter.name} data-value={filter.name}><span className="filterBold">{tdTextHead}</span>{tdText}</td>, )
        })
    }
    return (
        <React.Fragment>
            <td data-key={'event'} data-value={props.subscriber.event}>{props.subscriber.event}</td>
            <td data-key={'listenerSystem'} data-value={props.subscriber.listenerSystem}>{props.subscriber.listenerSystem}</td>
            <td data-key={'connector'} data-value={props.subscriber.connector}>{Object.keys(props.subscriber.connector)[0]}</td>
            {filterCells}
        </React.Fragment>
    );
};