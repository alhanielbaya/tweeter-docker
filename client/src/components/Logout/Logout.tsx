import React from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';

const Logout = () => {
  const history = useHistory();

  React.useEffect(() => {
    Axios.delete('http://localhost:8000/auth/logout');
    history.push('/home');
  });

  return <></>;
};

export default Logout;
