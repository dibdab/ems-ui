import * as React from 'react';

import { ITableHeaderProps } from './ITableHeaderProps';

export const TableHeader = (props: ITableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th>
          <input type="checkbox" />
        </th>
        {props.columnHeadings.map(columnHeading => (
          <th className="divTable-th" key={columnHeading}>{columnHeading}</th>))}
      </tr>
    </thead>
  );
};
