import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ movie }) => {

    const { ranking, title, img, distributor, amount, year } = movie
    const { src, alt } = img

    return (
        <div className='card'>
            <img src={src} alt={alt} className='card-img-top' />
            <div className='card-body'>
                <h2 className='card-title'>{`#${ranking} - ${title}(${year})`}</h2>
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                    {`Distributor: ${distributor}`}
                </li>
                <li className='list-group-item'>
                    {`Amount: ${amount}`}
                </li>
            </ul>
        </div>
    )
}

Card.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        distributor: PropTypes.string,
        year: PropTypes.number,
        amount: PropTypes.string,
        ranking: PropTypes.number,
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        })
    })
}

export default Card
