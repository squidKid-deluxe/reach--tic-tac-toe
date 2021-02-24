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
*
*   sudo ./reach compile && sudo make build && sudo make run-alice
*/


import * as stdlib_loader from "@reach-sh/stdlib/loader.mjs";
import * as TTT from "./build/index.main.mjs";
import { ask } from "@reach-sh/stdlib/ask.mjs";

// Function to render the board into ASCII art
function render(st) {

    let o = "\n\t╔═══╦═══╦═══╗\n\t║";
    for (let i = 0; i < 9; i++) {
        if (st.xs[i] == 1) {
            o += " X ";
        } else if (st.os[i] == 1) {
            o += " O ";
        } else {
            o += "   ";
        }
        if (i != 8) {
            o += i % 3 == 2 ? "║\n\t╠═══╬═══╬═══╣\n\t║" : "║";
        }
    }
    o += "║\n\t╚═══╩═══╩═══╝\n";
    return o;
}

// Most of the code goes into the async().
(async () => {

    console.clear();
    console.clear();
    console.log(`\n\n`)
    console.log(`     ╔═════════════════╗`)
    console.log(`     ║   PAY TO PLAY   ║`)
    console.log(`     ║  ╔═══╦═══╦═══╗  ║`)
    console.log(`     ║  ║ T ║ I ║ C ║  ║`)
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`)
    console.log(`     ║  ║ T ║ A ║ C ║  ║`)
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`)
    console.log(`     ║  ║ T ║ O ║ E ║  ║`)
    console.log(`     ║  ╚═══╩═══╩═══╝  ║`)
    console.log(`     ╚═════════════════╝`)
    console.log(`\n\n`)
    console.log(`\t1) simulation`)
    console.log(`\t2) live game\n`)

    let simulate = false; 
    const DISPATCH = {
        1: true,
        2: false
    };
    simulate = await ask(`\tchoice 1 or 2?`, (x) => {
        const choice = DISPATCH[x];
        if (choice == null) {
            throw Error(`Invalid Choice`);
        }
        return choice;
    });
    
    if (simulate) {
        // Print that we are running a random game
        console.log(`\nSimulating a random game\n`);
    }else{
        console.log("\n\n\nUSE YOUR NUMERIC KEYPAD TO PLAY\n\n")
        console.log(`\t╔═══╦═══╦═══╗`)
        console.log(`\t║ 7 ║ 8 ║ 9 ║`)
        console.log(`\t╠═══╬═══╬═══╣`)
        console.log(`\t║ 4 ║ 5 ║ 6 ║`)
        console.log(`\t╠═══╬═══╬═══╣`)
        console.log(`\t║ 1 ║ 2 ║ 3 ║`)
        console.log(`\t╚═══╩═══╩═══╝`)

    }
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
    const Alice = await stdlib.newTestAccount(startingBalance);
    const Bob = await stdlib.newTestAccount(startingBalance);
    // Deploy from Alice and attach with Bob
    console.log(`\nDeploying and attaching\n`);
    const ctcAlice = Alice.deploy(TTT);
    const ctcBob = Bob.attach(TTT, ctcAlice.getInfo());
    // Make a function to return the balance of either Alice or Bob
    const getBalance = async (who) => (await stdlib.balanceOf(who)) / 10 ** 18;
    // Get starting balances
    const beforeAlice = await getBalance(Alice);
    const beforeBob = await getBalance(Bob);
    // Create the function that the reach program interacts with
    const interactWith = (name) => ({
        // Allow the reach program to use random
        ...stdlib.hasRandom,

        // Return the wager to the reach program
        getWager: () => {
            console.log(`${name} publishes wager of ${dispAmt(wagerAmount)}`);
            return wagerAmount;
        },
        // Allow the reach program to print that someone has accepted the wager
        acceptWager: (givenWagerAmount) => {
            console.log(`${name} accepts wager of ${dispAmt(givenWagerAmount)}`);
        },
        // Give a move to the reach program
        getMove: async (board, fee_mt) => {
            // Log that the player has chosen a move (they will very soon)
            console.log(`${render(board)}\n${name}'s turn.`);
            // localize the X and O boards
            //return Math.floor( Math.random() * 9);
            const xs = board.xs;
            const os = board.os;
            let fee = 0;
            while (xs && os) {
                let choice = 99;
                if (simulate) {
                    // Choose a random place to go on the board
                    choice = Math.floor(Math.random() * 9);
                } else {
                    // Prompt user for a position to take
                    const POSITIONS = {
                        "7": 0,
                        "8": 1,
                        "9": 2,
                        "4": 3,
                        "5": 4,
                        "6": 5,
                        "1": 6,
                        "2": 7,
                        "3": 8,
                    };
                    choice = await ask(`${name} what position will you play?`, (x) => {
                        console.log(`You played ${x}`);
                        const position = POSITIONS[x];
                        if (position == null) {
                            throw Error(`Not a valid position ${position}`);
                        }
                        return position;
                    });
                    console.log(`Which maps to ${choice}`);
                }

                // If the place is not already occupied..
                if (xs[choice] + os[choice] == 0) {
                    // Calculate the theoretical fee for that place
                    fee = (wagerAmount / 16) * fee_mt[choice];
                    console.log(`${name} chooses move ${choice} from board Above.`);
                    console.log(`fee: ${fee / 10 ** 18} * 10**18`);
                    // Return the place chosen to move to.
                    return choice;
                } else {
                    if (! simulate) {
                        console.log("Invalid Choice Try Again")
                    }
                }
            }
            // FIXME: This never happens.
            throw Error(`impossible to make a move`);
        },
        // Print the end message, with the final board

        endsWith: (board) => {
            console.log(`${name} sees the final board: ${render(board)}`);
            //console.log(`Alice balance:  ${AfterAlice}`);
            //console.log(`Bob balance:    ${AfterBob}`);
        },
        print_data: (data0, data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16) => {
            console.log(
                `${name} printed: ` +
                    `\nFee        ${data0}` +
                    `\nX cells    ${data1}` +
                    `\nO cells    ${data2}` +
                    `\noccupied   ${data3}` +
                    `\nX fees     ${data4}` +
                    `\nX ante     ${data5 / 10 ** 18}` +
                    `\nO fees     ${data6}` +
                    `\nO ante     ${data7 / 10 ** 18}` +
                    `\npot total  ${data8 / 10 ** 18}` +
                    `\nwager      ${data9 / 10 ** 18}` +
                    `\ntoA        ${data10 / 10 ** 18}` +
                    `\ntoB        ${data11 / 10 ** 18}` +
                    `\ndouble x   ${data12}`+
                    `\ndouble o   ${data13}`+
                    `\nx win      ${data14}`+
                    `\no win      ${data15}`+
                    `\ntie        ${data16}`
            );
        },
    });

    // Start the interaction processes
    await Promise.all([TTT.A(ctcAlice, interactWith("Alice")), TTT.B(ctcBob, interactWith("Bob"))]);

    const afterAlice = await getBalance(Alice);
    const afterBob = await getBalance(Bob);

    console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
    console.log(`Bob went from ${beforeBob} to ${afterBob}.`);

    // Print the 'Done!' message and exit.
    console.log(`Done!`);
    process.exit(0);
})();
