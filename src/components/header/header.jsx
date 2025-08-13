import './header.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/argentBankLogo.png'

export default function Header() {
    return(
        <header className='header'>
            <nav className="header__nav">
                <Link className="header__nav-link" to="/">
                    <img
                        className="header__nav-logo"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link className="header__nav-link" to="/login"><i className="fa fa-user-circle"></i>Sign In</Link>
                </div>
                </nav>
        </header>
    )
};