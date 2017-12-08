import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { database } from './reducers/';
// import { State } from './types/';

// const store = createStore<State>(database, {
//   databaseArray: ['DB1', 'DB2', 'DB3'],
//   currentDatabase: ''
// });

ReactDOM.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <div className="light-theme">
        <App />
      </div>
    {/* </Provider> */}
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
