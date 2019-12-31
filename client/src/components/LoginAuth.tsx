import React from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { IRootState } from '..';

const LoginAuth = ({ component: Component, ...rest }: any) => {
  const isAuth = useSelector((state: IRootState) => state.user.isAuth);

  return (
    <>
      {!isAuth ? (
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

export default LoginAuth;
