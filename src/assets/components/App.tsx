import * as React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './App.css';
import Login from './Login/Login';

class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
