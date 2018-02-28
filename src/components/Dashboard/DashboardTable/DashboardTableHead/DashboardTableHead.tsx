import * as React from 'react';

import { IDashboardTableHeadProps } from './IDashboardTableHeadProps';

export const DashboardTableHead = (props: IDashboardTableHeadProps) => {
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
