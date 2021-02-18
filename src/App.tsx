import React from 'react';

import './App.css';
import { Provider } from 'react-redux';
import Store from './Store';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Message } from './views/Message';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Switch>
          <Route path="/main" component={Message} />
          <Redirect to="/main" />
        </Switch>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
