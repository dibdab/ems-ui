import * as React from 'react';

import { ITableBodyProps } from './ITableBodyProps';

import TableRows from './TableRows/TableRows';

import { ISubscriber } from 'types';

export const TableBody = (props: ITableBodyProps) => {
  var tableData = props.subscribers as ISubscriber[];
  return (
    <tbody className="subscriberTableBody">
      <TableRows tableData={tableData as ISubscriber[]} columnKeyNames={props.columnKeyNames} />
    </tbody>
  )
};



