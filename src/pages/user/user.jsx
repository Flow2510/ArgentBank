import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../../data/store';
import Account from '../../components/account/account';
import './user.scss'

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
    <main>
      <div className='user__wrapper'>
        {info && (
          <section className='user'>
            <div className='user__content'>
              <h1 className='user__content-title'>Welcome back<br />{info.firstName} {info.lastName} !</h1>
              <button className='user__content-button'>Edit Name</button>
            </div>
            <div className='user__gallery'>
              <Account 
                account="Argent Bank Checking"
                count="x8349"
                balance="$2,082.79"
                subtitle="Available Balance"
              />
              <Account 
                account="Argent Bank Savings"
                count="x6712"
                balance="$10,928.42"
                subtitle="Available Balance"
              />
              <Account 
                account="Argent Bank Credit Card"
                count="x8349"
                balance="$184.30"
                subtitle="Current Balance"
              />
            </div>
        </section>
      )}
      </div>
    </main>
  );
}