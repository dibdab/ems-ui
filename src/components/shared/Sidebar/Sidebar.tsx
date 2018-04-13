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
  const tools = [
    { sidebarName: 'Replay Event', urlName: 'eventreplay' },
    { sidebarName: 'Mule App Status', urlName: 'muleappstatus' },
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
  const toolList = tools.map((tool, index) => (
    <NavLink
      to={`/dashboard/${tool.urlName}`}
      key={tool.urlName}
      className="button"
      activeClassName="active"
    >
      {tool.sidebarName}
    </NavLink>
  ));
  const isSidebarOpenClass = props.isSidebarOpen
    ? 'visible'
    : 'hidden';
  return (
    <div className={`sidebar elevation-8 ${isSidebarOpenClass}`}>
      <nav>
        <div>Tables</div>
        {tableList}
        <div>DLQ Tools</div>
        {toolList}
      </nav>
    </div>
  );
}
