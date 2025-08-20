import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInfo } from '../../data/store';
import Account from '../../components/account/account';
import './user.scss'

export default function User() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  const info = useSelector(state => state.user.info);
  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState();
  const fetchInfo = () => {
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
  }

  useEffect(() => {
    if (token) {
      fetchInfo();
    }
  }, [token, dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    setEditMode(false);
  }

  const editName = (e) => {
    e.preventDefault();
  fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      userName: newUserName
    })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error("Erreur serveur");
    }
    return res.json();
  })
  .then(() => {
    alert("Modification OK");
    fetchInfo();
  })
  .catch(error => {
    alert("Erreur: " + error.message);
  });
};

  return (
    <main>
      <div className='user__wrapper'>
        {info && (
          <section className='user'>
            <div className='user__content'>
              {!editMode && 
                <>
                  <h1 className='user__content-title'>Welcome back<br />{info.firstName} {info.lastName} !</h1>
                  <button className='user__content-button' onClick={()=> setEditMode(true)}>Edit Name</button>
                </>
              }
              {editMode &&
                <>
                  <h1 className='user__content-title'>Edit user info</h1>
                  <form className='user__form' action="">
                    <div className='user__input-wrapper'>
                      <label htmlFor="userNameInput">User name:</label>
                      <input type="text" name='userNameInput' id='userNameInput' placeholder={info.userName} onChange={(e) => setNewUserName(e.target.value)}/>
                    </div>
                    <div className='user__input-wrapper'>
                      <label htmlFor="firstNameInput">First name:</label>
                      <input type="text" name='firstNameInput' id='firstNameInput' placeholder={info.firstName} disabled/>
                    </div>
                    <div className='user__input-wrapper'>
                      <label htmlFor="lastNameInput">Last name:</label>
                      <input type="text" name='lastNameInput' id='lastNameInput' placeholder={info.lastName} disabled/>
                    </div>
                    <div className='user__button-wrapper'>
                      <button onClick={editName}>Save</button>
                      <button onClick={handleClick}>Cancel</button>
                    </div>
                  </form>

                </>
              }
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