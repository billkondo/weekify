import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'pages/app/App';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';

import { RepositoryProvider, repository } from './injector';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <RepositoryProvider value={repository}>
        <App />
      </RepositoryProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
