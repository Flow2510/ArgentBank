import './header.scss';
import logo from '../../assets/images/argentBankLogo.png'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../data/store'
import { Link } from 'react-router-dom';

export default function Header() {
    const dispatch = useDispatch();
    const { loggedIn, info } = useSelector((state) => state.user)

    return(
        <header className='header'>
            <Link to='/'>
                <img className='header__logo' src={logo} alt="argent bank logo" />
            </Link>
            <nav className='header__nav'>
                {loggedIn ? (
                    <>
                        <Link className='header__link' to='/user'>
                            <button className='header__button'>
                                <i className="fa fa-user-circle header__icon"></i>{info ? info.firstName : 'user'}
                            </button>
                        </Link>
                            <button className='header__button' onClick={() => dispatch(logout())}>
                                <i className="fa-solid fa-arrow-right-from-bracket header__icon"></i>Sign Out
                            </button>
                    </>
                ) : (
                    <Link className='header__link' to='/login'>
                        <button className='header__button'>
                            <i className="fa-solid fa-user header__icon"></i>Sign In
                        </button>
                    </Link>
                )}
            </nav>
        </header>
    )
}