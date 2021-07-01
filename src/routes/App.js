import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';
import Dashboard from '../containers/Dashboard';
import Login from '../components/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
