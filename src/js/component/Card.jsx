import React from 'react';

const Card = ({ title, text, imgSrc }) => {
    return (
        <div className="card text-center">
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
            <div class="card-footer text-muted">
            <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};

export default Card;