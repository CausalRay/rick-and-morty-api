import React from 'react';
import "./characters.css"

const Characters = () => {
    return (
        <>
        <div className='characters'> 
            <span className='status'>Alive</span>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
            <div className="character__description">
                <div className="char__name">Rick</div>
                <div className="species">Human</div>

            </div>
        </div>

        <div className='characters'> 
            <span className='status'>Alive</span>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
            <div className="character__description">
                <div className="char__name">Rick</div>
                <div className="species">Human</div>

            </div>
        </div>

        <div className='characters'> 
            <span className='status'>Alive</span>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
            <div className="character__description">
                <div className="char__name">Rick</div>
                <div className="species">Human</div>

            </div>
        </div>
        </>

        
    );
}

export default Characters;
