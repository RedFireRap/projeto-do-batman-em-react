import react from 'react';
import './cards.css';

function Cards(){
    return (
        <div className='actor-cards-container'>
            <div className='cards-content'>
                <div class="card banner-1"><strong>Robert Pattison</strong>Batman</div>
                <div class="card banner-2"><strong>Zoë Kravitz</strong>Mulher Gato</div>
                <div class="card banner-3"><strong>Jeffrey Wright</strong>Gordon</div>
            </div>
        </div>
    )
}

export default Cards;