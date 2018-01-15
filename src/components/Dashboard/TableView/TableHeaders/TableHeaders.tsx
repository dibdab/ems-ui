import * as React from 'react';

import { ITableHeadersProps } from './ITableHeadersProps';

export const TableHeaders = (props: ITableHeadersProps) => {
  const tableHeaders = props.orderedColumnNames.map(columnName => (
    <th key={columnName}>{columnName}</th>
  ));
  return (
    <thead>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        {tableHeaders}
      </tr>
    </thead>
  );
};
