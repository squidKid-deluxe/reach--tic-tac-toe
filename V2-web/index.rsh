"reach 0.1";
/*
╔═════════════════╗
║   PAY TO PLAY   ║
║  ╔═══╦═══╦═══╗  ║
║  ║ T ║ I ║ C ║  ║
║  ╠═══╬═══╬═══╣  ║
║  ║ T ║ A ║ C ║  ║
║  ╠═══╬═══╬═══╣  ║
║  ║ T ║ O ║ E ║  ║
║  ╚═══╩═══╩═══╝  ║
╚═════════════════╝
*
*  Reach Hackathon
* 
*  squidKid-deluxe and litepresence
*  WTFPL 2021
*/
// Initialize the state template
const Board =  Array(UInt, 9);
const Fees = Array(UInt, 9);
const State = Object({
    xs_turn: Bool,
    xs: Board,
    os: Board,
});
// Make a array for the actual state
const board_matrix = Array.replicate(9, 0);

// Create the array for the fees, which is aligned with the state array.
const fee_matrix = array(UInt, [3, 2, 3, 2, 4, 2, 3, 2, 3]);

const fee_realized = (st, fee) => Array.iota(9).map((i) => fee[i] * st[i]);

const sum_fee = (st, fee) => (fee_realized(st, fee)).sum();

// Initially create the ttt state, with x_is_first, x_moves, and o_moves
const ttt_initial = (XisFirst) => ({
    xs_turn: XisFirst,
    xs: board_matrix,
    os: board_matrix,
});

// Checks if occupied_cell player is in the cell; 0 until occupied_cell, then 1
const occupied_cell = (st, i) => st.xs[i] + st.os[i]; //(st.xs[i] || st.os[i]);

// array of any occupied cell; 0=unoccupied and 1=occupied
const occupied_matrix = (st) => Array.iota(9).map((i) => occupied_cell(st, i));

// counts the number of wins
const wins = (b) =>
    (
    // horizontal
    ((b[0] + b[1] + b[2] == 3) ? 1:0) 
    +((b[3] + b[4] + b[5] == 3) ? 1:0)
    +((b[6] + b[7] + b[8] == 3) ? 1:0)
    // vertical
    +((b[0] + b[3] + b[6] == 3) ? 1:0)
    +((b[1] + b[4] + b[7] == 3) ? 1:0)
    +((b[2] + b[5] + b[8] == 3) ? 1:0)
    // diagonal
    +((b[0] + b[4] + b[8] == 3) ? 1:0) 
    +((b[2] + b[4] + b[6] == 3) ? 1:0)
    )

// true if there is a winner
const winner = (b) => wins(b) > 0

// true if there is a winner in more than one direction
const double_winner = (b) => wins(b) > 1

// Check if the game was a draw, aka the state is full
const draw = (board) => board.sum() == 9; //board.and();

// Check if the game has been completed, occupied_cell by winning or a draw
const game_over = (st) => winner(st.xs) || winner(st.os) || draw(occupied_matrix(st));

// Check if a given move is from 0-9 (aka on the board).
const is_legal = (move) => 0 <= move && move <= 8;

// Make sure that a given move is not already occupied_cell.
// Returns true if occupied_cell returns zero
const is_valid = (st, move) => occupied_cell(st, move) ==0;

// Get a move that it is on the board and not occupied
function getValidMove(interact, st) {
    const move = interact.getHand(st, fee_matrix);
    assume(is_legal(move));
    assume(is_valid(st, move));
    //assume(occupied_cell(st, move) == 0);
    return declassify(move);
}

// Apply given move to the state list.
function applyMove(st, move) {
    require(is_legal(move));
    require(is_valid(st, move));
    //require(occupied_cell(st, move) == 0);
    const turn = st.xs_turn;
    return {
        xs_turn: !turn,
        xs: turn ? st.xs.set(move, 1) : st.xs,
        os: turn ? st.os : st.os.set(move, 1),
    };
}

// :param array(st): state state for x and o, x_isfirst
// :returns bool(winner_is_x):
const winner_is_x = (st) => winner(st.xs);
// :param array(st): state state for x and o, x_isfirst
// :returns bool(winner_is_o):
const winner_is_o = (st) => winner(st.os);
// :param array(st): state state for x and o, x_isfirst
// :returns bool(winner_is_x):
const double_winner_is_x = (st) => double_winner(st.xs);
// :param array(st): state state for x and o, x_isfirst
// :returns bool(winner_is_o):
const double_winner_is_o = (st) => double_winner(st.os);

// Protocol
const DELAY = 20; // in blocks

// Both players can access these JavaScript functions
const Player = {
    ...hasRandom,
    getHand: Fun([State, Fees], UInt),
    endsWith: Fun([Bool], Null),
    informTimeout: Fun([], Null)
};

// Only Alice can access these JavaScript functions
const Alice = {
    ...Player,
    wager: UInt
};

// Only Bob can access these JavaScript functions
const Bob = {
    ...Player,
    acceptWager: Fun([UInt], Null)
};

const DEADLINE = 240;

/// Define the main exports of the reach program ///
export const main = Reach.App(
    {},
    // Participants
    [
        ["A", Alice],
        ["B", Bob],
    ],
    (A, B) => {

        const informTimeout = () => {
          each([A, B], () => {
            interact.informTimeout(); }); };

        // Initialize all interactions and pay the wager for Alice
        A.only(() => {
            const wagerAmount = declassify(interact.wager);
            const _coinFlipA = interact.random();
            const commitA = declassify(digest(_coinFlipA));
        });
        A.publish(wagerAmount, commitA).pay(wagerAmount);
        commit();

        // Initialize all interactions and pay the wager for Bob
        B.only(() => {
            interact.acceptWager(wagerAmount);
            const coinFlipB = declassify(interact.random());
        });
        B.publish(coinFlipB).pay(wagerAmount).timeout(DEADLINE, () => closeTo(A, informTimeout));
        commit();

        // Randomly calculate who goes first
        A.only(() => {
            const coinFlipA = declassify(_coinFlipA);
        });
        A.publish(coinFlipA);

        require(commitA == digest(coinFlipA));
        const XisFirst = ((coinFlipA % 2) + (coinFlipB % 2)) % 2 == 0;

        // Create the state using the function created earlier
        var state = ttt_initial(XisFirst);

        // Create the balance of the players
        invariant(balance() == 2 * wagerAmount);

        // While the game hasn't ended...
        while (!game_over(state)) {
            if (state.xs_turn) {
                // ... if it is X's turn...
                commit();
                //...get a valid move...
                A.only(() => {
                    const moveA = getValidMove(interact, state);
                });
                A.publish(moveA);
                //...apply that move...
                state = applyMove(state, moveA);
                continue;
            } else {
                // do the same thing, except use O's variables.
                commit();
                // Get a valid move...
                B.only(() => {
                    const moveB = getValidMove(interact, state);
                });
                B.publish(moveB);
                //...Apply that move...
                state = applyMove(state, moveB);
                continue;
            }
        }
        const x_wager = (sum_fee(state.xs, fee_matrix))*wagerAmount/16
        const o_wager = (sum_fee(state.os, fee_matrix))*wagerAmount/16
        const x_unspent = wagerAmount - x_wager
        const o_unspent = wagerAmount - o_wager
        const pot = x_wager + o_wager
        // bool logical winner
        const double_x_win = double_winner_is_x(state)
        const double_o_win = double_winner_is_o(state)
        const x_win = winner_is_x(state) 
        const o_win = winner_is_o(state)
        const tie = !( x_win || o_win)        
        // At the end of the game, divy funds to the correct party
        const [toA, toB] = (
            double_x_win ? [2*wagerAmount, 0]
            : double_o_win ? [0, 2*wagerAmount]
            : x_win ? [pot+x_unspent, o_unspent]
            : o_win ? [x_unspent, pot+o_unspent]
            : [o_wager+x_unspent, x_wager+o_unspent]
        );
        // Use JS to print a statement by Alice
        // A.only(() => {
        //     interact.print_data(
        //         fee_matrix,
        //         state.xs,
        //         state.os,
        //         occupied_matrix(state),
        //         fee_realized(state.xs, fee_matrix),
        //         x_wager,
        //         fee_realized(state.os, fee_matrix),
        //         o_wager,
        //         pot,
        //         wagerAmount,
        //         toA,
        //         toB,
        //         double_x_win,
        //         double_o_win,
        //         x_win,
        //         o_win,
        //         tie
        //     );
        // });
        // Transfer from smart contract to each respective player
        transfer(toA).to(A);
        transfer(toB).to(B);
        commit();

        
        // Use JavaScript to print that the game has ended.
        A.only(() => {
          interact.endsWith(o_win);
        });

        B.only(() => {
          interact.endsWith(x_win);
        });
    }
);
