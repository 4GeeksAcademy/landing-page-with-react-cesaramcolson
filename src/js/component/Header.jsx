import React from 'react';

const Header = () => {
    return (
        <header className="bg-light mb-3">
            <div className="container">
                <h1 className="display-1">A Warm Welcome!</h1>
                <p className="lead">This is an example for the text placed in the header of the text.</p>
                <a className="btn btn-primary btn-lg mb-5" href="#" role="button">Call to action!</a>
            </div>
        </header>
    );
};

export default Header;