import React from 'react';

const Header = () => {
    return (
        <div className="d-flex justify-content-center mt-4">
        <header className="bg-light mb-3" style={{ width: '87rem' }}>
            <div className="container">
                <h1 className="display-1">A Warm Welcome!</h1>
                <p className="lead">This is an example for the text placed in the header of the text.</p>
                <a className="btn btn-primary btn-lg mb-5" href="#" role="button">Call to action!</a>
            </div>
        </header>
        </div>
    );
};

export default Header;