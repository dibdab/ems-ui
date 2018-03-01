import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { ISidebarProps } from './ISidebarProps';
import './Sidebar.css';

import { tableDataTypes } from 'enums';
import store from 'store';
import { TableDataActionCreators } from 'redux_';

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
      onClick={handleClick}
    >
      {table.sidebarName}
    </NavLink>
  ));
  const isSidebarOpenClass = props.isSidebarOpen
    ? 'visible'
    : 'hidden';
  // TODO: Set up events service with no filters
  function handleClick() {
    store.dispatch(TableDataActionCreators.tableDataFilterChange({}));
    store.dispatch(TableDataActionCreators.tableDataFetchSuccess([]));
  }

  return (
    <div className={`sidebar ${isSidebarOpenClass}`}>
      <nav>{tableList}</nav>
    </div>
  );
};
