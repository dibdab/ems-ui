import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { tableTypes } from 'enums';

import { ISidebarProps } from './ISidebarProps';
import './Sidebar.css';

export default function Sidebar(props: ISidebarProps) {
  const tables = [
    { sidebarName: 'Subscribers', urlName: tableTypes.Subscribers },
    { sidebarName: 'Events', urlName: tableTypes.Events },
  ];
  const tableList = tables.map((table, index) => (
    <NavLink
      to={`/dashboard/${table.urlName}`}
      key={table.urlName}
      className="button"
      activeClassName="active"
    >
      {table.sidebarName}
    </NavLink>
  ));
  const isSidebarOpenClass = props.isSidebarOpen
    ? 'visible'
    : 'hidden';

  return (
    <div className={`sidebar ${isSidebarOpenClass}`}>
      <nav>
        <div>Tables</div>
        {tableList}
        <div>DLQ Tools</div>
        <NavLink
          to={`/dashboard/${tableTypes.Events}/replay`}
          className="button"
          activeClassName="active"
        >
          Replay Events
        </NavLink>
      </nav>
    </div>
  );
}
