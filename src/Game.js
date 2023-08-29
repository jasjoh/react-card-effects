import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./Board";

const URL = "https://deckofcardsapi.com/api/";

/** Brain component for our game that handles state
 *
 * Props: [none]
 *
 * State:
 * - deckId: The id of the deck of cards retrieved from deckofcardsapi.com
 * - card: The current card drawn from the deck represented by deckId
 *
 * App -> Game -> Board
 *
 */
function Game() {
  const [deckId, setDeckId] = useState(undefined);
  const [card, setCard] = useState(undefined);

  /** Async function that fetches a new card for the current deck and
   * sets the 'card' state to that card object
   */
  async function fetchAndSetCard() {
    const axiosResponse = await axios.get(
      `${URL}/deck/${deckId}/draw?count=1`
    );
    setCard(axiosResponse.data.cards[0]);
  }

  // responsible for getting the deck; called only on mount; sets deckId
  useEffect(function fetchDeckOnMount() {
    async function fetchDeck() {
      const axiosResponse = await axios.get(`${URL}/deck/new/shuffle/?deck_count=1`);
      setDeckId(axiosResponse.data.deck_id);
    }
    fetchDeck();
  }, []);

  return (
    <Board card={card} getNewCard={fetchAndSetCard} />
  );

}

export default Game;
