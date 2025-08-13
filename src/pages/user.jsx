import './user.scss';

export default function User(){
    return(
        <div className='user'>
            <div className="user__intro">
                <h1 className="user__intro-title">Welcome back<br />Tony Jarvis!</h1>
                <button className="user__intro-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account__content-wrapper">
                    <h3 className="account__title">Argent Bank Checking (x8349)</h3>
                    <p className="account__amount">$2,082.79</p>
                    <p className="account__amount-description">Available Balance</p>
                </div>
                <div className="account__content-wrapper cta">
                    <button className="transaction-button">View transactions</button>
                </div>
            </section>
            {/* <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section> */}
        </div>
    )
}