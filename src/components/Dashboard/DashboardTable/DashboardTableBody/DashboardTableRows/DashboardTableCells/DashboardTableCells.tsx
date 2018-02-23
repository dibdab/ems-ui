import * as React from 'react';

import IDashboardTableCellsProps from './IDashboardTableCellsProps';

export const DashboardTableCells = (props: IDashboardTableCellsProps) => {
    const cells: JSX.Element[] = [];
    let value;
    props.columnKeyNames.map((columnKeyName: any, index: number) => {
        if (typeof props.tableData[columnKeyName] === 'object') {
            value = Object.keys(props.tableData[columnKeyName]);
        } else {
            value = props.tableData[columnKeyName];
        }
        cells.push(<td data-key={columnKeyName} data-value={props.tableData[columnKeyName]}>{value}</td>, )
    })
    return (
        <React.Fragment>
            {cells}
        </React.Fragment>
    );
};