import * as React from 'react';

import { ITableHeadProps } from './ITableHeadProps';

export const TableHead = (props: ITableHeadProps) => {
  const columnHeadings = props.columnHeadings.map(
    columnHeading => (
      <th key={columnHeading}>{columnHeading}</th>
    ),
  );
  return (
    <thead>
      <tr>
        <th className="dashboardTable-checkbox-td">
          <input type="checkbox" />
        </th>
        {columnHeadings}
      </tr>
    </thead>
  );
};
