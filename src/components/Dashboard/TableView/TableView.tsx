import * as React from 'react';

import { ITableViewProps } from './ITableViewProps';
// import { sidebarPaths } from 'enums';

import { TableHeader } from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

export default function TableView(props: ITableViewProps) {
  {
    // Define headers for table
    // let tableHeadings: string[] = [];
    // switch (props.match.params.tableName) {
    //   case sidebarPaths.Subscribers:
    //     tableHeadings = [
    //       'Event Type',
    //       'Subscriber',
    //       'Connector Type',
    //       'Connector Url',
    //       'Connector Method/Queue',
    //     ];
    //     break;
    //   case sidebarPaths.Test:
    //     tableHeadings = ['testHeader'];
    //     break;
    //   default:
    //     tableHeadings = [
    //       'You should not be here, guess you broke the website... You should probably leave now.',
    //     ];
    //     break;
    // }
    console.log(props, "tableview")
    return (
      <div>
        <table className="dashboardTable">
          <TableHeader columnHeadings={props.columnHeadings} />
          <TableBody columnKeyNames={props.columnKeyNames} tableName={props.tableName} />
        </table>
      </div>
    );
  }
}
