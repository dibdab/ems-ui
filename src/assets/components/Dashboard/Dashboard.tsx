import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';
import { DashboardProps } from './DashboardProps';

export default function Dashboard ({currentDatabase, databaseArray, onSetCurrentDatabase}: DashboardProps) {
  {
    return (
      <div>
        <Topbar databaseArray={databaseArray}/>
        <Sidebar />
      </div>
    );
  }
}