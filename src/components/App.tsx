import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import '../styles/themes.css';
import './App.css';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Helmet>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto|Noto+Sans:300,400,500"
            rel="stylesheet"
          />
          <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
        </Helmet>
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
