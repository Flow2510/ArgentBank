import './login.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, login } from '../../data/store';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password 
                })
            });
            const data = await response.json();
            
            if (response.ok){
                console.log("Data reçue :", data);
                dispatch(setToken(data.body.token));
                dispatch(login());
                navigate('/user');
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="login__wrapper">
            <section className='login'>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1 className="login__title">Sign In</h1>
                <form className='login__form' onSubmit={handleSubmit}>
                    <div className="login__input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input className='login__input' type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="login__input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input className='login__input' type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="login__checkbox-wrapper">
                        <input className='login__checkbox' type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="login__button">Sign In</button>
                </form>
            </section>
        </div>
    );
}