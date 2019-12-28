import React from 'react';

import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { isAuthenticated } from './auth/auth';
import { setAuth, setProfile } from './store/user/userActions';
import Axios from 'axios';
import { Iprofile } from './oauth-helpers/oauthTypes';
import Logout from './components/Logout/Logout';
import Followed from './components/Home/Followed/Followed';
import LoginAuth from './components/LoginAuth';

const App: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  isAuthenticated().then(isAuthenticated => {
    dispatch(setAuth(isAuthenticated));
    if (isAuthenticated) {
      Axios.get('users/').then((res: { data?: { profile: Iprofile } }) => {
        if (res.data) dispatch(setProfile(res.data.profile));
      });
    }
  });

  React.useEffect(() => {
    isAuthenticated().then(auth => {
      dispatch(setAuth(auth));
    });
  }, []);

  return (
    <>
      {location.pathname === '/' ? <Redirect to='/home'></Redirect> : ''}
      <Switch>
        {/* <button className='btn btn-large' onClick={testAuth}>
        test auth
      </button> */}
        <Route exact path='/home' component={Home}></Route>
        <Route exact path='/followed' component={Home}></Route>
        <LoginAuth exact path='/login' component={Login}></LoginAuth>
        <Route exact path='/logout' component={Logout}></Route>
        <Route
          path='*'
          component={() => <Redirect to='/home'></Redirect>}
        ></Route>
      </Switch>
    </>
  );
};

export default App;
