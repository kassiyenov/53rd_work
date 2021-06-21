import React from 'react';

let Card = (props) => {

  let mapWord = {
    h: 'hearts',
    c: 'clubs', 
    d: 'diams',
    s: 'spades'
  }
  let mapSym = {
    h: '♥',
    c: '♣',
    d: '♦',
    s: '♠'
  }

  let suitName = mapWord[props.suit];

  let suitSym = mapSym[props.suit]
  return (
    <div className={`card rank-${props.rank} ${suitName}`}>
      <span className="rank">{props.rank}</span>
      <span className="suit">{suitSym}</span>
    </div>
  );
};

export default Card;