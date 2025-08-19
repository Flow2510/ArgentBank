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
            <div>
                {loggedIn ? (
                    <>
                        <Link to='/user'>
                            <button>
                                <i className="fa fa-user-circle"></i>{info ? info.firstName : 'user'}
                            </button>
                        </Link>
                            <button onClick={() => dispatch(logout())}>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>Sign Out
                            </button>
                    </>
                ) : (
                    <Link to='/login'><i className="fa-solid fa-user"></i>Sign In</Link>
                )}
            </div>
        </header>
    )
}