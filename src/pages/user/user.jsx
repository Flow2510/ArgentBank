import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../../data/store';

export default function User() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const info = useSelector(state => state.user.info);

  useEffect(() => {
    if (!token) return; // on attend d’avoir le token

    fetch("http://localhost:3001/api/v1/user/profile", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.body) {
          dispatch(setInfo(data.body)); // on met les infos dans Redux
        }
      })
      .catch(err => console.error(err));
  }, [token, dispatch]);

  return (
    <div>
      <h1>Page User</h1>
      {info && (
        <div>
          <p>Name: {info.firstName}</p>
          <p>Email: {info.email}</p>
        </div>
      )}
    </div>
  );
}