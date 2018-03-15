import * as React from 'react';

import IFilterTdProps from './IFilterTdProps';

export default function FilterCell(props: IFilterTdProps) {
    const filterCells: JSX.Element[] = [];
    let tdText = '';
    let tdTextHead = '';
    if (props.filters) {
        props.filters.map((filter, index) => {
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
            } else {
                tdTextHead = 'Error:';
                tdText = `Filter type of ${typeof filter.value} unhandled.`;
            }
            filterCells.push(
                (
                    <div
                        data-filter={JSON.stringify({ name: filter.name, value: filter.value })}
                        data-filterjsonlocation="filter"
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

    return (
        <td
            title="filter"
            className="filter-td"
        >
            {filterCells}
        </td>
    );
}
