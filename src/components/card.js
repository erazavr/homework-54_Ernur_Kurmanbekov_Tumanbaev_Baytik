import React from 'react';
const suits = {
    'D': 'diams',
    'H': 'hearts',
    'C': 'clubs',
    'S': 'spades'
};
const symbols = {
    'D': '♦',
    'H': '♥',
    'C': '♣',
    'S': '♠',
};
const Card = props => {

    let className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit]}`;
    return (
        <div>
            <div className={className}>
                <span className="rank">{props.rank}</span>
                <span className="suit">{symbols[props.suit]}</span>
            </div>
        </div>
    );
};

export default Card;