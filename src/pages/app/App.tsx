import React from 'react';
import logo from 'logo.svg';
import 'App.css';

import { useAuthenticationStatus } from './app_hooks';
import { AuthenticationStatus } from 'repositories/authentication';
import { LoginPage } from 'pages/login/LoginPage';

const App = () => {
  const status = useAuthenticationStatus();

  if (status === AuthenticationStatus.Unauthenticated)
    return <LoginPage></LoginPage>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
