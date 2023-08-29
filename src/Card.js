import React from "react";

/**
 * Component that displays card
 * Props:
 *  - card: The current card drawn from the deck represented by deckId
 *
 * State: none
 *
 */

function Card({ card }) {

  if (card === undefined) {
    return <div></div>;
  }
  return (
    <div>
      <img src={card.image} alt={card.code}></img>
    </div>
  );
}


export default Card;