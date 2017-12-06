import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './assets/components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { database } from './reducers/';
import { StoreState } from './types/';

const store = createStore<StoreState>(database, {
  databaseArray: ['DB1', 'DB2', 'DB3'],
  currentDatabase: ''
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="light-theme">
        <App />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
