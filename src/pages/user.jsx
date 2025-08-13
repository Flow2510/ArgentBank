import AccountCard from '../components/accountcard/accountcard';
import './user.scss';

export default function User(){
    return(
        <div className='user'>
            <div className="user__intro">
                <h1 className="user__intro-title">Welcome back<br />Tony Jarvis!</h1>
                <button className="user__intro-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <AccountCard 
                count="x8349"
                amount="$10,928.42"
            />
            <AccountCard 
                count="x6712"
                amount="$2,082.79"
            />
            <AccountCard 
                count="x8349"
                amount="$184.30"
            />
        </div>
    )
}