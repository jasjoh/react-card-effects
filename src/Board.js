import React from "react";
import Card from "./Card";

/**
 * Component that displays one card and a button to get a new card
 * Props:
 *  - card: The current card drawn from the deck represented by deckId
 * - getNewCard: Function to retrieve new card from current deck
 *
 * State: none
 *
 */

function Board({ card, getNewCard }) {

  return (
    <div>
      <Card card={card} />
      <button onClick={getNewCard}>GIMMI A CARD</button>
    </div>

  );
}


export default Board;