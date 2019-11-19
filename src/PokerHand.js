
class PokerHand {
    constructor(cards) {
        this.cards = cards;
    }
    getOutcome() {
        let countRank = 0;
        let countSuits = 0;
        for (let i = 0; i < this.cards.length; i++) {
            for (let j = i + 1; j < this.cards.length; j++) {
                if (this.cards[i].rank === this.cards[j].rank) {
                    countRank++;
                }
                if (this.cards[i].suit === this.cards[j].suit) {
                    countSuits++;
                }
            }
        }
        if (countRank === 1) {
            return  'One Pair';
        }
        if (countRank === 2) {
            return 'Two pairs'
        }
        if (countRank === 3) {
            return 'Three of a kind;'
        }
        if (countSuits === 5) {
            return 'Flush'
        }
        else {
            return 'Nothing'
        }
    }
}

export default PokerHand;