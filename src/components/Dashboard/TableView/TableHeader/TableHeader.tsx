import * as React from 'react';

import { ITableHeaderProps } from './ITableHeaderProps';

export const TableHeader = (props: ITableHeaderProps) => {
  const columnHeadings = props.columnHeadings.map(
    columnHeading => (
      <th key={columnHeading}>{columnHeading}</th>
    ),
  );
  return (
    <thead>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        {columnHeadings}
      </tr>
    </thead>
  );
};
