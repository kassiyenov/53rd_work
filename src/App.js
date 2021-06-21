import React, { Component } from 'react';
import './App.css';
import Card from './card/card'
import CardDeck from './cardDeck/cardDeck'
import './card/card.css'
import './cards_papka/cards.css'

class App extends Component {
  deck = new CardDeck()
 
  state = {
    hand: []
  }

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateDeck = () => {
    let hand = [...this.state.hand]
    for(let i = 0; i < 5; i++){
      let rN = this.randomNumber(0, this.deck.arr.length - 1);
      console.log(rN)
      hand.push({'suit': this.deck.arr[rN].suit, 'rank': this.deck.arr[rN].rank, 'id': this.deck.arr[rN].uuid});
      this.deck.arr.splice(rN, 1);

      this.setState({hand});
    }
  }
  generateFromAnotherDeck = () => {
    let anotherDeck = new CardDeck();
    let hand = [...this.state.hand]
    hand = [];
    for(let i = 0; i < 5; i++){
      let rN = this.randomNumber(0, this.deck.arr.length - 1);
      console.log(rN)
      hand.push({'suit': this.deck.arr[rN].suit, 'rank': this.deck.arr[rN].rank, 'id': this.deck.arr[rN].uuid});
      this.deck.arr.splice(rN, 1);

      this.setState({hand});
    }
  }
  
  // console.log(randomNumber(2, 52));

  render() {
    // console.log(this.deck.arr[rN].suit)
    this.deck.createCardDeck();
    let arr = []
    for (let i in this.state.hand) {
      arr.push(<Card key={this.state.hand[i].id} rank={this.state.hand[i].rank} suit={this.state.hand[i].suit}/>)
    }
    return (
      <div>
          <button onClick={this.generateDeck}>generate</button>
          <button onClick={this.generateFromAnotherDeck}>generateFromAnotherDeck</button>
          
          <div className="playingCards">
            {arr}
          </div>
        </div>
    )
  }
}

export default App;
