import './accountcard.scss';

export default function AccountCard({ amount, count }) {
    return(
        <section className="account">
            <div className="account__content-wrapper">
                <h3 className="account__title">Argent Bank Checking ({count})</h3>
                <p className="account__amount">{amount}</p>
                <p className="account__amount-description">Available Balance</p>
            </div>
            <div className="account__content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}