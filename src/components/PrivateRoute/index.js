import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ exact, path, component: Component }) {
  const auth = true;
  return (
    <Route exact={exact} path={path}>
      {auth ? <Component /> : <Redirect to='/login' />}
    </Route>
  );
}
