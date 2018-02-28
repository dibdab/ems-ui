import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ISidebarProps } from './ISidebarProps';
import './Sidebar.css';

import { tableDataTypes } from 'enums';

export const Sidebar = (props: ISidebarProps) => {
  const tables = [
    { sidebarName: 'Subscribers', urlName: tableDataTypes.Subscribers },
    { sidebarName: 'Events', urlName: tableDataTypes.Events },
  ];
  const tableList = tables.map((table, index) => (
    <NavLink
      to={`/dashboard/${table.urlName}`}
      key={table.urlName}
      className="button button-simplelink"
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
      <nav>{tableList}</nav>
    </div>
  );
};
