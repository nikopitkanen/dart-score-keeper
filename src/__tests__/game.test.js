import { turn, state } from "../modules/game.js";

describe("game module", () => {
  beforeEach(() => {
    state.players = [
      { name: "john", score: 501, legsWon: 0 },
      { name: "jane", score: 501, legsWon: 0 },
    ];
    state.currentPlayerIndex = 0;
    state.legsToWin = 2;
    state.gameType = 501;
  });

  test("should reduce players score and switch player", () => {
    turn(100);
    expect(state.players[0].score).toBe(401);
    expect(state.currentPlayerIndex).toBe(1);
  });

  test("Should not reduce score if triggers bust rule", () => {
    state.players[0].score = 40;
    turn(41);
    expect(state.players[0].score).toBe(40);
    expect(state.currentPlayerIndex).toBe(1);
  });

  test("Should not reduce score if triggers bust rule 2", () => {
    state.players[0].score = 40;
    turn(41);
    expect(state.players[0].score).toBe(40);
    expect(state.currentPlayerIndex).toBe(1);
  });

  test("Should win a leg and reset scores", () => {
    state.players[0].score = 50;
    turn(50);
    expect(state.players[0].legsWon).toBe(1);
    expect(state.players[0].score).toBe(501);
    expect(state.players[1].score).toBe(501);
  });

  test("should declare game winner when legsToWin is reached", () => {
    state.players[0].legsWon = 1;
    state.players[0].score = 50;
    turn(50);
  });
});
