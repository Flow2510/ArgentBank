import './card.scss'

export default function Card({image, alt, title, text}){
    return(
            <article className="features__item">
                <img src={image} alt={alt} className="features__item-icon" />
                <h3 className="features__item-title">{title}</h3>
                <p className='features__item-text'>{text}</p>
            </article>
    )
}