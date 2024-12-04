import { RANDOM } from "mysql/lib/PoolSelector";
import React, { useState } from "react";

import "./Cards.css";
import Points from "./Points.jsx";
import Card from "./Card.jsx";
async function wait(second) {
  return new Promise((resolve) => setTimeout(resolve, 1000 * second));
}

const Cards = () => {
  const cards = [];
  const cardClass = ["♤", "♡", "♧", "♢"];
  let joker = [];
  //   ジョーカー生成
  (joker.className = "joker"), (joker.number = "j"), (joker.class = "j");
  cards.push(joker);
  cards.push(joker);

  for (let i = 0; i <= 3; i++) {
    for (let j = 1; j <= 12; j++) {
      let card = [];
      card.className = cardClass[i] + " " + j;
      (card.class = cardClass[i]), (card.number = j);
      cards.push(card);
    }
  }

  console.log("実行されたよ"); //----------------------------------------------------実行ログ
  console.log(cards); //------------------------------------------------------------実行ログ
  function shuffle(array) {
    // カードのシャッフル
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  shuffle(cards);
  function turn(e) {
    // クリック時にカードをひっくり返す関数
    e.currentTarget.classList.toggle("show");
  }

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
  let choose = [];

  function hideCards() {
    //カードを再度隠す関数
    const visible = document.querySelectorAll(".show");
    visible.forEach((element) => {
      element.classList.toggle("show");
    });
  }
  const bingo = () => {
    //カードを非活性にする関数
    const visible = document.querySelectorAll(".show");
    visible.forEach((element) => {
      element.classList = "bingo";
      element.disabled = "disable";
    });
  };
  // ***************ゲーム処理ここから******************

  function game(e) {
    if (e.currentTarget.classList == "bingo") {
      //bigoだったら何もしない
      return;
    }
    if (choose.length == 0) {
      //一枚目のカードの処理
      turn(e);
      const target = e.currentTarget.className;
      const targetNum = target.replace(/[^0-9]/g, "");
      const chosen = { target: `${target}`, targetNum: `${targetNum}` };
      choose.push(chosen);
      console.log(choose);
      return choose;
    } else if (choose.length != 0) {
      // 二枚目以降のカードの処理
      turn(e);
      const target = e.currentTarget.className;
      const targetNum = target.replace(/[^0-9]/g, "");
      const chosen = { target: `${target}`, targetNum: `${targetNum}` };
      choose.push(chosen);
      console.log(choose);

      if (choose[0].targetNum == choose[1].targetNum) {
        // 一枚目と二枚目が同じだった時の処理
        bingo();
        choose = [];
      } else if (choose.length >= 3) {
        // 一枚目と二枚目が違うとき｜｜三枚目以降のカードの処理
        choose = [];
        hideCards();
      }
    }
  }
  return (
    <>
      <p>cards</p>
      <div className="card">
        {cards.map((data) => (
          <Card key={data.className} data={data} onClick={game} />
        ))}
      </div>
    </>
  );
};

export default Cards;
