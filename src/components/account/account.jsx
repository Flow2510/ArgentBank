import './account.scss'

export default function Account({ account, count, balance, subtitle}){
    return(
        <article className='account'>
            <p className='account__text'>{account} ({count})</p>
            <h2 className='account__balance'>{balance}</h2>
            <p className='account__subtitle'>{subtitle}</p>
            <button className='account__button'>View Transactions</button>
        </article>
    )
}