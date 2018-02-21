import * as React from 'react';

import { ITableBodyProps } from './ITableBodyProps';

import TableRows from './TableRows/TableRows';

export const TableBody = (props: ITableBodyProps) => {
  return (
    <tbody>
      <TableRows
        tableData={props.tableData}
        columnKeyNames={props.columnKeyNames}
        filter={props.filter}
        isLoading={props.isLoading}
      />
    </tbody>
  );
};
