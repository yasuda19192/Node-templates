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
        joker.number = "",
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

    function turn(e) {
        e.currentTarget.classList.toggle('show');
    }
    shuffle(cards);
    console.log(cards)


        // ****************************************************************//
        // ひっくり返されたものが一枚目なら二枚目をめくれる。
        // 二枚目がひっくり返されたら数字が同じかどうかの判定を行う。
        // 判定：：
        //     同じ
        //         ならばそのカードを消す。
        //         点数を追加。
        //     違う
        //         ひっくり返したカードを元に戻す。
        // ****************************************************************//
    function game() {
        ///

    }
    return (
        <>
            <p>cards</p>
            <div className="card">
                {cards.map((data => (
                    <div key={data.index} className={` ${data.className}`} onClick={turn} >
                        <section className="obverse">
                            <p className='number'>{data.number}</p>
                            <p className='mark'>{data.class}</p>
                        </section>
                        <section className="behind">
                            behind
                        </section>
                    </div>
                )))}
            </div>
        </>
    )
}

export default Cards