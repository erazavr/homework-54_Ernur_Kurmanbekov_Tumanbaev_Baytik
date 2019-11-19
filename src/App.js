import React, {Component} from 'react';
import './App.css';
import './cards/cards.css'
import Card from "./components/card";
import CardDeck from './CardDeck'
import PokerHand from "./PokerHand";
class App extends Component {
    constructor(props){
        super(props);
        this.deck = new CardDeck();
    }
    state = {
        cards: [],
        result: ''

    };
    changeCards =  () => {
        if (this.deck.decks.length < 5) {
            alert('that\'s all' );
        } else {
            const cards = this.deck.getCards(5);
            const poker = new PokerHand(this.state.cards);
            this.setState({cards, result: poker.getOutcome()})
        }
    };
    render() {
        return (
            <div className='myCard'>
                <p>{this.state.result}</p>
              <div className="playingCards faceImages">
                  {this.state.cards.map((card,index) => {
                      return (
                         <Card key = {index} suit = {card.suit} rank = {card.rank}/>
                         );
                  })}
              </div>
                <button onClick = {this.changeCards}>Shuffle Cards</button>
            </div>
        );
    }
}

export default App;