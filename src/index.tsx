import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <div className="light-theme">
        <App />
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
