import './login.scss'

export default function LogIn() {
  return (
    <div className="login__wrapper">
        <section className='login'>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1 className="login__title">Sign In</h1>
            <form className='login__form'>
                <div className="login__input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="login__input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="login__checkbox-wrapper">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button type="submit" className="login__button">Sign In</button>
            </form>
        </section>
    </div>
  );
}