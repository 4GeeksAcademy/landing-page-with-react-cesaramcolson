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
            <div className="row">
                {cards.map((card, index) => (
                    <div className="col-3 mb-3" key={index}>
                        <Card title={card.title} text={card.text} imgSrc={card.imgSrc} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;