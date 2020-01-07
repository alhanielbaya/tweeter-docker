import Axios from 'axios';

export function isAuthenticated(): Promise<boolean> {
  return new Promise((resolve, reject) => {
    Axios.get('http://localhost:8000/auth/')
      .then((res: { data: { status: boolean } }) => {
        if (res.data.status === true) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
