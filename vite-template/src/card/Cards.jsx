import { RANDOM } from 'mysql/lib/PoolSelector';
import React from 'react'
import './Cards.css'

const Cards = () => {
    const cards = [];
    const cardClass = [
        '♤',
        '♡',
        '♧',
        '♢'
    ]
let joker = []
joker.className = "joker",
joker.number = "  ",
joker.class = "j"
cards.push(joker);
cards.push(joker);
    for (let i = 0; i <= 3; i++) {
        for (let j = 1; j <= 12; j++) {
            let card = [];

            card.className = cardClass[i] + " " + j;
            card.class = cardClass[i],
                card.number = j
            cards.push(card);
        }
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    shuffle(cards);
    console.log(cards)
    return (
        <>
            <p>cards</p>
            <div className="card">
                {cards.map((data => (
                    <div className={data.className}>
                        <p className='number'>{data.number}</p>
                        <p className='mark'>{data.class}</p>
                    </div>
                )))}
            </div>
        </>
    )
}

export default Cards