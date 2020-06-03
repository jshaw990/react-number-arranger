import React from 'react';

function Navbar(props) {
    return (
        <header className='container-fluid fixed-top'>
            <div className='row'>
                <h1 className='title'>Celebrity Memory Game</h1>
                <nav className='nav'>
                    <p>Score: <span>{props.currentScore}</span></p>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;