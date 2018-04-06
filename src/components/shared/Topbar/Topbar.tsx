import * as React from 'react';
import store from 'store';

import { SidebarActionCreators } from 'redux_';

import './Topbar.css';
import { ITopbarProps } from './ITopbarProps';

export default function Topbar(props: ITopbarProps) {
  const isSidebarToggleActive = props.isSidebarOpen
    ? 'active'
    : '';

  function handleClick() {
    store.dispatch(SidebarActionCreators.isOpen(!props.isSidebarOpen));
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
}
