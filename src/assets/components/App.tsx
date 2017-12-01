import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect exact={true} from="/" to="/login" />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NoRoute} />
        </Switch>
      </div>
    );
  }
}

function NoRoute(): JSX.Element {
  return <div>404 - Route not found</div>;
}
