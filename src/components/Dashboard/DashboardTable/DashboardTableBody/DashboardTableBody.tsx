import * as React from 'react';

import { IDashboardTableBodyProps } from './IDashboardTableBodyProps';

import DashboardTableRows from './DashboardTableRows/DashboardTableRows';

export const DashboardTableBody = (props: IDashboardTableBodyProps) => {
  return (
    <tbody>
      <DashboardTableRows
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
