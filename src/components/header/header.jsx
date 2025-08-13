import './header.scss'
import logo from '../../assets/images/argentBankLogo.png'

export default function Header() {
    return(
        <header className='header'>
            <nav className="header__nav">
                <a className="header__nav-link" href="./index.html">
                    <img
                        className="header__nav-logo"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="header__nav-link" href="./sign-in.html"><i className="fa fa-user-circle"></i>Sign In</a>
                </div>
                </nav>
        </header>
    )
};