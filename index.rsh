'reach 0.1';

/* Tic Tac Toe */

/// Create constants ///

// Initialize the board template

const ROWS = 3;
const COLS = 3;
const CELLS = ROWS * COLS;
const Board = Array(Bool, CELLS);
const Fees = Array(UInt, 9);
const State = Object({ xs_turn: Bool,
                       xb: Board,
                       ob: Board});


// Make a array for the actual board
const board_mt =
      Array.replicate(9, false);

// Create the array for the fees, which is aligned with the board array.
const fee_mt = array(UInt, [3, 2, 3, 2, 4, 2, 3, 2, 3]);

// Initially create the ttt board, with x_is_first, x_moves, and o_moves
const ttt_initial = (XisFirst) =>
      ({ xs_turn: XisFirst,
         xb: board_mt,
         ob: board_mt});

// Checks if two players are in the same cell
const cell_both = (st, i) =>
      (st.xb[i] || st.ob[i]);


////Not sure exactly what these do:////

//////////////////////////////////////
const marks_all = (st) =>
      Array.iota(9).map(i => cell_both(st, i));

const cell = (r, c) => c + r * COLS;

const op = (op, rhs) => (lhs) => op(lhs, rhs);

const seq = (b, r, c, dr, dc) =>
      (b[cell(r, c)] &&
       b[cell(r+dr, dc(c))] &&
       b[cell(r+dr+dr, dc(dc(c)))]);

const row = (b, r) => seq(b, r, 0, 0, op(add, 1));
const col = (b, c) => seq(b, 0, c, 1, op(add, 0));
//////////////////////////////////////

// :param list(b): board state for x or o
// :returns bool(winning_player):
const winning_p = (b) =>
      (row(b, 0) || row(b, 1) || row(b, 2) ||
       col(b, 0) || col(b, 1) || col(b, 2) ||
       seq(b, 0, 0, 1, op(add, 1)) ||
       seq(b, 0, 2, 1, op(sub, 1)));

// Check if the game was a draw, aka the board is full
const complete_p = (b) => b.and();

// Check if the game has been completed, either by winning or a draw
const ttt_done = (st) =>
      (winning_p(st.xb)
       || winning_p(st.ob)
       || complete_p(marks_all(st)));

// Check if a given move is from 0-9 (aka on the board).
const legalMove = (m) => (0 <= m && m < CELLS);
// Make sure that a given move is not already occupied.
const validMove = (st, m) => (! cell_both(st, m));

// Get a move and make sure that it is on the board and not already occupied.
function getValidMove(interact, st) {
  const _m = interact.getMove(st, fee_mt);
  assume(legalMove(_m));
  assume(validMove(st, _m));
  return declassify(_m); }

// Apply given move to the board list.
function applyMove(st, m) {
  require(legalMove(m));
  require(validMove(st, m));
  const turn = st.xs_turn;
  return { xs_turn: ! turn,
           xb: (turn ? st.xb.set(m, true) : st.xb),
           ob: (turn ? st.ob : st.ob.set(m, true)) }; }

// :param array(st): board state for x and o, x_isfirst
// :returns bool(ttt_winner_is_x):
const ttt_winner_is_x = (st) => winning_p(st.xb);

// :param array(st): board state for x and o, x_isfirst
// :returns bool(ttt_winner_is_o):
const ttt_winner_is_o = (st) => winning_p(st.ob);

// Protocol
const DELAY = 20; // in blocks

// Both players can access these JavaScript functions
const Player =
      { ...hasRandom,
        getMove: Fun([State, Fees], UInt),
        getBalance: Fun([], UInt),
        endsWith: Fun([State], Null) };
// Only Alice can access these JavaScript functions
const Alice =
      { ...Player,
        getWager: Fun([], UInt) };
// Only Bob can access these JavaScript functions
const Bob =
      { ...Player,
        acceptWager: Fun([UInt], Null) };

/// Define the main exports of the reach program ///
export const main =
  Reach.App(
    {},
    // Participants
    [['A', Alice], ['B', Bob]],
    (A, B) => {
      // Initialize all interactions and pay the wager for Alice
      A.only(() => {
        const wagerAmount = declassify(interact.getWager());
        const _coinFlipA = interact.random();
        const commitA = declassify(digest(_coinFlipA)); });
      A.publish(wagerAmount, commitA)
        .pay(wagerAmount);
      commit();

      // Initialize all interactions and pay the wager for Bob
      B.only(() => {
        interact.acceptWager(wagerAmount);
        const coinFlipB = declassify(interact.random()); });
      B.publish(coinFlipB)
        .pay(wagerAmount);
      commit();

      // Randomly calculate who goes first

      A.only(() => {
        const coinFlipA = declassify(_coinFlipA); });
      A.publish(coinFlipA);

      require(commitA == digest(coinFlipA));
      const XisFirst = (((coinFlipA % 2) + (coinFlipB % 2)) % 2) == 0;

      // Create the board using the function created earlier
      var board = ttt_initial(XisFirst);

      // Create the balance of the players
      invariant(balance() == fee_mt.sum());

      // While the  game hasn't ended...
      while (!ttt_done(board)) {
        // ... if it is X's turn...
        if (board.xs_turn) {
          commit();
          //...get a valid move...

          A.only(() => {
            const moveA = getValidMove(interact, board); });
          A.publish(moveA);

          //...apply that move...

          board = applyMove(board, moveA);

          // ...and continue onward.
          continue; }
        else { // otherwise, if it is O's turn, do the same thing, except use O's variables.
          commit();

          // Get a valid move...
          B.only(() => {
            const moveB = getValidMove(interact, board); });
          B.publish(moveB);

          //...Apply that move...

          board = applyMove(board, moveB);

          // ...and continue onward.
          continue; } }


      // At the end of the game, see if there is a winner

      const [ toA, toB ] =
            (ttt_winner_is_x(board) ? [ 2, 0 ]
             : (ttt_winner_is_o(board) ? [ 0, 2 ]
                : [ 1, 1 ]));

      // Create the pot variable so that the for loop can add to it
      let pot = 0;

      // Use a for loop to iterate through the fee_mt and add fees to the pot.
      for (let i = 0; i < fee_mt.length; i++) {
        if (board.xb[i] || board.ob[i]) {
          pot == pot + (wager/16)*fee_mt[i];;
          /*
          The bit of math above breaks down into the
          fact that the maximum number of turns that
          a player can have is 5. Then, the maximum
          fee would be 4+3+3+3+3=16. Since the user
          enters as much as they want to pay for the
          whole game as their wager, one can divide the
          wager by 16 and then multiply it by the fee
          for their current move.
          */
        };
      };

      // Give each player their respective money
      transfer(toA * pot).to(A);
      transfer(toB * pot).to(B);
      commit();

      // Use JavaScript to print that the game has ended.
      each([A, B], () => {
        interact.endsWith(board); }); });
