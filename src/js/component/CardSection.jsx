import React from 'react';
import Card from './Card';

const CardSection = () => {
    const cards = [
        {
            title: 'Card Title 1',
            text: 'Some example text for the card text.',
            imgSrc: 'https://via.placeholder.com/150'
        },
        {
            title: 'Card Title 2',
            text: 'Some example text for the card text.',
            imgSrc: 'https://via.placeholder.com/150'
        },
        {
            title: 'Card Title 3',
            text: 'Some example text for the card text.',
            imgSrc: 'https://via.placeholder.com/150'
        },
        {
            title: 'Card Title 4',
            text: 'Some example text for the card text.',
            imgSrc: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <div className="container">
            <div className="row-md d-md-flex justify-content-center w-100">
                {cards.map((card, index) => (
                    <div className="col-md-3 m-3 mb-4" key={index}>
                        <Card title={card.title} text={card.text} imgSrc={card.imgSrc} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;