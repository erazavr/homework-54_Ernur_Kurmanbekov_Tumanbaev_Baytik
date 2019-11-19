const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suit = ['D', 'S', 'C', 'H'];

class CardDeck {
    decks = [];
    constructor() {
        for (let i = 0; i<ranks.length;i++) {
            for (let k = 0; k<suit.length;k++) {
                this.decks.push({rank: ranks[i], suit: suit[k],})
            }
        }

    }
    getCard() {
        const number = Math.floor(Math.random() * this.decks.length);
        const card = this.decks[number];
        this.decks.splice(number, 1);
        return card
    }

    getCards(howMany) {
        const cards = [];
        for (let i = 0; i<howMany;i++) {
            cards.push(this.getCard())
        }
        return cards
    }
}
export default CardDeck;