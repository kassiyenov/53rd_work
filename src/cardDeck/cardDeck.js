import uuid from "uuid/v4";
class CardDeck {
  suits = ['s', 'h', 'd', 'c'];
  ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k', 'a'];

  arr= [];
  createCardDeck = () => {;
    for(let i in this.suits) {
      for(let j in this.ranks) {
        this.arr.push({suit: this.suits[i],
                       rank: this.ranks[j],
                       uuid: uuid()
        });
      }
    }
  } 
}

export default CardDeck;