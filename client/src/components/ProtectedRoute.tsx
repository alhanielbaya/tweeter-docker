import React, { useState } from 'react';
import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../auth/auth';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const [isAuth, setIsAuth] = useState(true);
  isAuthenticated().then(isAuth => {
    setIsAuth(isAuth);
  });

  return (
    <>
      {isAuth ? (
        <Route {...rest} component={Component}></Route>
      ) : (
        <Route
          {...rest}
          component={() => <Redirect to='/home'></Redirect>}
        ></Route>
      )}
    </>
  );
};

export default ProtectedRoute;
