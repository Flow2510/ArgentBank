import './account.scss'

export default function Account({ account, count, balance, subtitle}){
    return(
        <article className='account'>
            <div className='account__content'>
                <p className='account__content-text'>{account} ({count})</p>
                <h2 className='account__content-balance'>{balance}</h2>
                <p className='account__content-subtitle'>{subtitle}</p>
            </div>
            <button className='account__button'>View Transactions</button>
        </article>
    )
}