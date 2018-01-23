import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.css';

import { tableDataTypes } from 'enums';

export default function Sidebar(): JSX.Element {
  const tables = [
    { sidebarName: 'Subscribers', urlName: tableDataTypes.Subscribers },
    { sidebarName: 'Test', urlName: tableDataTypes.Test },
  ];
  const tablelist = tables.map((table, index) => (
    <NavLink
      to={`/dashboard/${table.urlName}`}
      key={table.urlName}
      className="button button-simplelink"
      activeClassName="active"
    >
      {table.sidebarName}
    </NavLink>
  ));
  return (
    <div className="sidebar">
      <input placeholder="Search Events" />
      <nav>{tablelist}</nav>
    </div>
  );
}
