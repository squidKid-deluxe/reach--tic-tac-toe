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
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";
// Function to render the board into ASCII art
function render(st) {
    let o = "";
    for (let z = 0; z <= 2; z++) {
        o += "\n\tZ";
        o += z.toString() + " ";
        o += "╔═══╦═══╦═══╗\n";
        for (let y = 0; y <= 2; y++) {
            o += "\t   ║";
            for (let x = 0; x <= 2; x++) {
                if (z==1 && y==1 && x==1) {
                    o += "███";
                } else if (st.os[z * 9 + y * 3 + x] == 1) {
                    o += " O ";
                } else if (st.xs[z * 9 + y * 3 + x] == 1) {
                    o += " X ";
                } else {
                    o += "   ";
                }
                o += "║";
            }
            o += " Y" + y.toString();
            if (y != 2) {
                o += "\n\t   ╠═══╬═══╬═══╣\n";
            }
        }
        o += "\n\t   ╚═══╩═══╩═══╝";
    }
    o += "\n\t     X   X   X";
    o += "\n\t     0   1   3\n";
    return o;
}
// Most of the code goes into the async().
(async () => {
    console.clear();
    console.clear();
    console.log(`RULES OF THE GAME`);
    console.log(``);
    console.log(`1) A maximum total game wager is agreed to at the start of the game`);
    console.log(`2) The costs for each move are:`);
    console.log(`    - 6/68ths of your wager for a cube corner`);
    console.log(`    - 4/68ths of your wager for the center of cube face`);
    console.log(`    - 3/68ths of your wager for the center of cube edge`);
    console.log(`3) If your opponent gets a double win, you lose your full wager`);
    console.log(`4) Each player is also personally responsible for transaction fees`);
    console.log(`5) X always pays the initial contract transaction fee`);
    console.log(`6) If you decide to remove yourself from the game before it ends, you lose everything you have put in the pot`);
    console.log(`7) Upon a tie game, you lose everything you have put in the pot and gain your opponent's expenditure`);
    console.log(`8) The person to play the first move is chosen randomly`);
    await ask(`\nPress enter to continue.`, (x) => {return x;});
    console.clear();
    console.clear();
    console.log(`\n\n`);
    console.log(`     ╔═════════════════╗`);
    console.log(`     ║ 3-D PAY TO PLAY ║`);
    console.log(`     ║  ╔═══╦═══╦═══╗  ║`);
    console.log(`     ║  ║ T ║   ║   ║  ║`);
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`);
    console.log(`     ║  ║   ║ I ║   ║  ║`);
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`);
    console.log(`     ║  ║   ║   ║ C ║  ║`);
    console.log(`     ║  ╚═══╩═══╩═══╝  ║`);
    console.log(`     ║  ╔═══╦═══╦═══╗  ║`);
    console.log(`     ║  ║ T ║   ║   ║  ║`);
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`);
    console.log(`     ║  ║   ║ A ║   ║  ║`);
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`);
    console.log(`     ║  ║   ║   ║ C ║  ║`);
    console.log(`     ║  ╚═══╩═══╩═══╝  ║`);
    console.log(`     ║  ╔═══╦═══╦═══╗  ║`);
    console.log(`     ║  ║ T ║   ║   ║  ║`);
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`);
    console.log(`     ║  ║   ║ O ║   ║  ║`);
    console.log(`     ║  ╠═══╬═══╬═══╣  ║`);
    console.log(`     ║  ║   ║   ║ E ║  ║`);
    console.log(`     ║  ╚═══╩═══╩═══╝  ║`);
    console.log(`     ╚═════════════════╝`);
    console.log(`\n\n`);
    console.log(`\t1) simulation`);
    console.log(`\t2) live game\n`);
    let simulate = false;
    const DISPATCH = {
        1: true,
        2: false,
    };
    simulate = await ask(`\tchoice 1 or 2?`, (x) => {
        const choice = DISPATCH[x];
        if (choice == null) {
            throw Error(`Invalid Choice`);
        }
        return choice;
    });
    // Create the function that the reach program interacts with
    const interact = (name) => ({
        // Allow the reach program to use random
        ...stdlib.hasRandom,
        // Return the wager to the reach program
        getWager: () => {
            console.log(`${name} publishes wager of ${stdlib.formatCurrency(wager)} ${stdlib.standardUnit}`);
            return wager;
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
                let choice = 13;
                let choice_z = 99;
                let choice_y = 99;
                let choice_x = 99;
                if (simulate) {
                    // Choose a random place to go on the board
                    while (choice == 13) {
                        choice = Math.floor(Math.random() * 27);
                    }
                    choice_z = Math.floor(choice / 9);
                    choice_y = Math.floor((choice - choice_z * 9) / 3);
                    choice_x = choice - choice_z * 9 - choice_y * 3;
                } else {
                    while (true) {
                        // Prompt user for a position to take
                        choice_z = await ask(`${name} enter Z coordinate: 0, 1, 2?`, (z) => {
                            if (parseInt(z) > 2 || parseInt(z) < 0) {
                                throw Error(`Not a valid Z position ${z}, must be 0, 1, 2`);
                            }
                            return z;
                        });
                        choice_y = await ask(`${name} enter Y coordinate: 0, 1, 2?`, (y) => {
                            if (parseInt(y) > 2 || parseInt(y) < 0) {
                                throw Error(`Not a valid Y position ${y}, must be 0, 1, 2`);
                            }
                            return y;
                        });
                        choice_x = await ask(`${name} enter X coordinate: 0, 1, 2?`, (x) => {
                            if (parseInt(x) > 2 || parseInt(x) < 0) {
                                throw Error(`Not a valid X position ${x}, must be 0, 1, 2`);
                            }
                            return x;
                        });
                        choice = 9 * parseInt(choice_z) + 3 * parseInt(choice_y) + parseInt(choice_x);
                        if (choice != 13) {
                            break;
                        } else {
                            console.log(`[1,1,1] is an invalid XYZ choice`);
                        }
                    }
                }
                console.log(`${name} played Z${choice_z} Y${choice_y} X${choice_x}`);
                console.log(`$which maps to move ${choice}.`);
                // If the place is not already occupied..
                if (xs[choice] + os[choice] == 0) {
                    // Calculate the theoretical fee for that place
                    fee = (wager / 68) * fee_mt[choice];
                    console.log(`This is a valid move, with fee: ${fee / 10 ** 18} * 10**18`);
                    // Return the place chosen to move to.
                    return choice;
                } 
                console.log("This place is occupied.  Try again.");
            }
        },
        // Print the end message, with the final board
        endsWith: (board) => {
            console.log(`${name} sees the final board: ${render(board)}`);
        },
        informTimeout: () => {
            console.log(`There was a timeout.`);
            process.exit(1);
        },
        print_data: (data0, data1, data2, data5, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16) => {
            console.log(
                `${name} printed: ` +
                    `\nFee        ${data0}` +
                    `\nX cells    ${data1}` +
                    `\nO cells    ${data2}` +
                    `\nX ante     ${data5 / 10 ** 18}` +
                    `\nO ante     ${data7 / 10 ** 18}` +
                    `\npot total  ${data8 / 10 ** 18}` +
                    `\nwager      ${data9 / 10 ** 18}` +
                    `\ntoA        ${data10 / 10 ** 18}` +
                    `\ntoB        ${data11 / 10 ** 18}` +
                    `\ndouble x   ${data12}` +
                    `\ndouble o   ${data13}` +
                    `\nx win      ${data14}` +
                    `\no win      ${data15}` +
                    `\ntie        ${data16}`
            );
        },
        acceptWager: async (amt) => {
            if (!simulate) {
                const accepted = await ask(`Do you accept the wager of ${stdlib.formatCurrency(amt, 4)}?`, yesno);
                if (accepted) {
                    return;
                } else {
                    process.exit(0);
                }
            } else {
                console.log(`${name} accepts wager of ${stdlib.formatCurrency(amt, 4)}`);
            }
        },
    });
    // Load the stdlib
    const stdlib = await stdlib_loader.loadStdlib();
    let is_X = null;
    let ctc = null;
    let ctcX = null;
    let ctcO = null;
    let acc = null;
    var wager = null;
    if (simulate) {
        // Print that we are running a random game
        console.log(`\nSimulating a random game\n`);
        // Format and assign the starting balance
        const startingBalance = stdlib.parseCurrency(1000);
        // Format and assign the wager
        wager = stdlib.parseCurrency(5);
        // Make a function to display amounts:
        const dispAmt = (x) => `${stdlib.formatCurrency(x)} ${stdlib.standardUnit}`;
        // Print that we are making the accounts
        console.log(`\nMaking accounts\n`);
        // Actually make the accounts
        const player_X = await stdlib.newTestAccount(startingBalance);
        const player_O = await stdlib.newTestAccount(startingBalance);
        // Deploy from Alice and attach with Bob
        console.log(`\nDeploying and attaching\n`);
        ctcX = player_X.deploy(TTT);
        ctcO =player_O.attach(TTT, ctcX.getInfo());
    } else {
        ////////////////////////////////////////////////////
        // Creates the accounts, contract, and sets wager //
        ////////////////////////////////////////////////////
        is_X= await ask(`Do you want to be player X?`, yesno);
        const who = is_X ? "PLAYER X" : "PLAYER O";
        console.log(`PLAYING PAY TO PLAY TIC-TAC-TOE AS ${who}\n\n`);

        const createAcc = await ask(`Would you like to create an account? (only possible on devnet)`, yesno);
        if (createAcc) {
            acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
        } else {
            const secret = await ask(`What is your account secret?`, (x) => x);
            acc = await stdlib.newAccountFromSecret(secret);
        }
        const deployCtc = is_X;
        if (deployCtc) {
            const amt = await ask(`How much do you want to wager?`, stdlib.parseCurrency);
            wager = amt;
            ctc = acc.deploy(TTT);
            const info = await ctc.getInfo();
            console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
        } else {
            const info = await ask(`Please paste the contract information:`, JSON.parse);
            ctc = acc.attach(TTT, info);
        }
        if (!is_X) {
            interact.acceptWager = async (amt) => {
                const accepted = await ask(`Do you accept the wager of ${fmt(amt)}?`, yesno);
                if (accepted) {
                    return;
                } else {
                    process.exit(0);
                }
            };
        }
        const fmt = (x) => stdlib.formatCurrency(x, 4);
        const getBalance = async () => fmt(await stdlib.balanceOf(acc));
        const before = await getBalance();
        console.log(`Your balance is ${before}`);
    }
    if (simulate) {
        // Start the interaction processes
        await Promise.all([TTT.X(ctcX, interact("Player X")), TTT.O(ctcO, interact("Player O"))]);
        console.log(`Done!`);
        process.exit(0);
    } else {
        const part = is_X ? TTT.X : TTT.O;
        await Promise.all([part(ctc, interact(is_X ? "Player X" : "Player O"))]);
        done();
    }
})();
