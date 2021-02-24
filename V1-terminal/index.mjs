import * as stdlib_loader from '@reach-sh/stdlib/loader.mjs';
import * as TTT from './build/index.main.mjs';


// Function to render the board into ASCII art
function render(st) {
  let o = '\n\t';
  for ( let i = 0; i < 9; i++ ) {
    o += st.xb[i] ? 'X' : st.ob[i] ? 'O' : ' ';
    if ( i != 8 ) {
      o += (i % 3 == 2) ? '\n\t-----\n\t' : '|';
    }
  }
  o += '\n';
  return o;
}


// Most of the code goes into the async().
(async () => {
  // Load the stdlib
  const stdlib = await stdlib_loader.loadStdlib();

  // Format and assign the starting balance
  const startingBalance = stdlib.parseCurrency(1000);

  // Format and assign the wager
  const wagerAmount = stdlib.parseCurrency(5);

  // Make a function to display amounts:
  const dispAmt = (x) => `${stdlib.formatCurrency(x)} ${stdlib.standardUnit}`;

  // Print that we are making the accounts
  console.log(`\nMaking accounts\n`);

  // Actually make the accounts
  const alice = await stdlib.newTestAccount(startingBalance);
  const bob = await stdlib.newTestAccount(startingBalance);

  // Deploy from Alice and attach with bob
  console.log(`\nDeploying and attaching\n`);

  const ctcAlice = alice.deploy(TTT);
  const ctcBob = bob.attach(TTT, ctcAlice.getInfo());

  // Make a function to return the balance of either Alice or Bob
  const getBalance = async (who) => await stdlib.balanceOf(who);

  // Print that we are running a random game
  console.log(`\nRunning a random game\n`);

  // Create the function that the reach program interacts with
  const interactWith = (name) => ({
    // Allow the reach program to use random
    ...stdlib.hasRandom,

    // Return the wager to the reach program
    getWager: () => {
      console.log(`${name} publishes parameters of game: wager of ${dispAmt(wagerAmount)}`);
      return wagerAmount;
    },
    // Allow the reach program to print that someone has accepted the wager
    acceptWager: (givenWagerAmount) => {
      console.log(`${name} accepts parameters of game: wager of ${dispAmt(givenWagerAmount)}`);
    },
    // Give a move to the reach program
    getMove: (board, fee_mt) => {
      // Log that the player has chosen a move (he/she hasn't yet, but they will very soon)
      console.log(`${render(board)}\n${name} chooses a move from the board Above.`);
      // localize the X and O boards
      const xb = board.xb;
      const ob = board.ob;
      let fee = 0;
      // While ???...
      while ( xb && ob ) {
        // Choose a random place to go on the board
        const i = Math.floor( Math.random() * 9);
        // Calculate the theoretical fee for that place
        fee = (wagerAmount/16)*fee_mt[i];
        // If the place is not already occupied.. 
        if ( ! ( xb[i] || ob[i] ) ) {
          // Divide the fee to remove all traces of graphine
          // FIXME: Make the respective player pay the fee continuously
          fee = fee/1000000000000000000;
          // Print that the fee has been added to the pot and the current value of the pot
          console.log(`fee added to pot:${fee/1000000000000000000}`)
          // Return the place chosen to move to.
          return i;
        }
      }
      // FIXME: This never happens.
      throw Error(`impossible to make a move`);
    },
    // Print the end message, with the final board
    endsWith: (board) => {
      console.log(`${name} sees the final board: ${render(board)}`);
    },
  });

  // Start the interaction processes
  await Promise.all([
    TTT.A(ctcAlice, interactWith('Alice')),
    TTT.B(ctcBob, interactWith('Bob')),
  ]);

  // Print the 'Done!' message and exit.
  console.log(`Done!`);
  process.exit(0);
})();
