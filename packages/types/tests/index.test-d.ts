import { expectType } from "tsd";
import type { CardMatchResult } from "../";

const cardMatchResult: CardMatchResult = {
  cardId: "1234",
  totalGames: 12,
  wins: 12,
  winrate: 12,
  cardName: "Some card",
};

expectType<string>(cardMatchResult.cardId);
