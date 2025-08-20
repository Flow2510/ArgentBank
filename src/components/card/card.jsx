import './card.scss';
import PropTypes from "prop-types";

export default function Card({ source, alt, title, text}) {
    return (
        <article className='card'>
            <img className='card__icon' src={source} alt={alt} />
            <h3 className='card__title'>{title}</h3>
            <p className='card__text'>{text}</p>
        </article>
    )
}

Card.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}