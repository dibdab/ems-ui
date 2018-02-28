import * as React from 'react';
import store from 'store';

import './Topbar.css';
import { ITopbarProps } from './ITopbarProps';

import { SidebarCreators } from 'redux_';

export const Topbar = (props: ITopbarProps) => {
  const isSidebarToggleActive = props.isSidebarOpen
    ? 'active'
    : '';

  function handleClick() {
    store.dispatch(SidebarCreators.isOpen(!props.isSidebarOpen));
  }

  return (
    <div className="topbar-wrapper elevation-4">
      <button onClick={handleClick} className={`button ${isSidebarToggleActive}`}>
        <i title="Toggle Sidebar." className="fas fa-bars" />
      </button>
      <div className="topbar-header">
        <h1>ems-ui</h1>
      </div>
      {/* <Searchlist databaseNames={databaseArray} /> */}
    </div>
  );
};
