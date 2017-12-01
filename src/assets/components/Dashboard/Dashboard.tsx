import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Topbar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Topbar />
        <Sidebar />
      </div>
    );
  }
}