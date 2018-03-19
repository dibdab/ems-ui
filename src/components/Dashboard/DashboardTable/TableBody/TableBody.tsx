import * as React from 'react';

import { ITableBodyProps } from './ITableBodyProps';

import TableRows from './TableRows/TableRows';

export const TableBody = (props: ITableBodyProps) => {
  return (
    <tbody>
      <TableRows
        tableData={props.tableData}
        columnKeyNames={props.columnKeyNames}
        isLoading={props.isLoading}
        hasErrored={props.hasErrored}
        filter={props.filter}
        tableName={props.tableName}
      />
    </tbody>
  );
};
