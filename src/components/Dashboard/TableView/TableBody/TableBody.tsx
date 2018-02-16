import * as React from 'react';

import { ITableBodyProps } from './ITableBodyProps';

import TableRows from './TableRows/TableRows';

import { ISubscriber } from 'types';

export const TableBody = (props: ITableBodyProps) => {
  return (
    <tbody className="subscriberTableBody">
      <TableRows tableData={props.subscribers as ISubscriber[]} columnKeyNames={props.columnKeyNames} filter={props.filter} />
    </tbody>
  );
};
