import React from "react";
import AppViews from "./views/AppViews";
import DeployerViews from "./views/DeployerViews";
import AttacherViews from "./views/AttacherViews";
import {
    renderDOM,
    renderView
} from "./views/render";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import * as reach from "@reach-sh/stdlib/ETH";
// currency default
const {
    standardUnit
} = reach;
// If dev mode, use console.log(), else, don't
const dev = true;
// sleep function for delaying until move_made soud is played
const sleep = async (milliseconds) => await new Promise(resolve => setTimeout(resolve, milliseconds));
// index css to reach
const handToInt = { 
    "box0": 0,
    "box1": 1,
    "box2": 2,
    "box3": 3,
    "box4": 4,
    "box5": 5,
    "box6": 6,
    "box7": 7,
    "box8": 8,
    "box9": 9,
    "box10": 10,
    "box11": 11,
    "box12": 12,
    "box13": 13,
    "box14": 14,
    "box15": 15,
    "box16": 16,
    "box17": 17,
    "box18": 18,
    "box19": 19,
    "box20": 20,
    "box21": 21,
    "box22": 22,
    "box23": 23,
    "box24": 24,
    "box25": 25,
    "box26": 26
};
// index reach to css
const intToHand = { 
    0: "box0", 
    1: "box1", 
    2: "box2", 
    3: "box3", 
    4: "box4", 
    5: "box5", 
    6: "box6", 
    7: "box7", 
    8: "box8", 
    9: "box9",
    10: "box10",
    11: "box11",
    12: "box12",
    13: "box13",
    14: "box14",
    15: "box15",
    16: "box16",
    17: "box17",
    18: "box18", 
    19: "box19",
    20: "box20", 
    21: "box21", 
    22: "box22", 
    23: "box23", 
    24: "box24", 
    25: "box25", 
    26: "box26"
};
// X and O image stored on imgur
const X_image = "https://imgur.com/eBsDAXr.png";
const O_image = "https://imgur.com/h1xuIW1.png";
// set default variables, wager, account fund amount and standard unit
const defaults = {
    defaultFundAmt: "100",
    defaultWager: "5",
    standardUnit
};
// App class
class App extends React.Component {
    // Starting screen, aka Connecting accounts
    constructor(props) {
        super(props);
        this.state = {
            view: "ConnectAccount",
            ...defaults
        };
    }
    // When the player's account has connected, either ask them to fund their account or simply start the game
    async componentDidMount() {
        this.setState({
            view: "Start"
        });
    }
    async finalizeMount() {
        var acc = await reach.getDefaultAccount();
        if (dev) {
            console.log(acc)
        }
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({
            acc,
            bal
        });
        try {
            const faucet = await reach.getFaucet();
            this.setState({
                view: "FundAccount",
                faucet
            });
        } catch (e) {
            this.setState({
                view: "DeployerOrAttacher"
            });
        }
    }
    // Fund the given account and then start the game
    async fundAccount(fundAmount) {
        await reach.transfer(
            this.state.faucet,
            this.state.acc,
            reach.parseCurrency(fundAmount)
        );
        this.setState({
            view: "DeployerOrAttacher"
        });
    }
    // Skip funding the account and continue to the game
    async skipFundAccount() {
        this.setState({
            view: "DeployerOrAttacher"
        });
    }
    // Have the user select if they want to be an attacher or a deployer
    selectAttacher() {
        this.setState({
            view: "Wrapper",
            ContentView: Attacher
        });
    }
    selectDeployer() {
        this.setState({
            view: "Wrapper",
            ContentView: Deployer
        });
    }
    // return the final data (rendered)
    render() {
        return renderView(this, AppViews);
    }
}
// Create the class for a normal player
class Player extends React.Component {
    // create the random function for the reach file to access
    random() {
        return reach.hasRandom.random();
    }
    // get the move the user wants to play
    async getHand(x, xs, os) { // bool(x) whether its X's turn
        // Present the buttons to the user so that they can actually select their move
        // hand is a box ID number relative to numeric keypad
        let valid = 1; // assume the cell is occupied until proven otherwise
        let hand = null; // initialize the hand until player plays with null
        let thirteen = true
        while (valid > 0 || thirteen) { // while occupied
            hand = await new Promise((resolveHandP) => {
                this.setState({
                    view: "GetHand",
                    resolveHandP,
                    xs, // 1d array of 1's 0's; 1 = occupied by X
                    os // 1d array of 1's 0's; 1 = occupied by O
                });
                // log the state of the board in the console and replace and update the pieces
                for (let i = 0; i <= 26; i++) {
                    if (i != 13) {
                        if (dev) { // log the state X's and O's on the backend 
                            console.log(`${i} ${intToHand[i]} xs[i]=${parseInt(xs[i])} os[i]=${parseInt(os[i])}`);
                        } 
                        if (parseInt(xs[i]) === 1) { // apply X's where they go on grid
                            document.getElementById(intToHand[i]).src = X_image; 
                        } else { 
                            if (parseInt(os[i]) === 1) { // apply O's where they go on grid
                                document.getElementById(intToHand[i]).src = O_image;
                            }
                        }
                    }
                }
            });
            var blinger = document.getElementById("bling");
            blinger.play();
            // should return 1=occupied / 0=vacant
            valid = (
                parseInt(os[handToInt[hand]])
                + parseInt(xs[handToInt[hand]])
            );
            // the center of the cube is not a legal move
            if (handToInt[hand] != 13) {
                thirteen = false;
            }
            if (dev) {
                console.log(`${valid}`);
            }
        };
        sleep(4000);
        if (dev) {
            console.log(`${os}`);
            console.log(`${xs}`);
        }
        // Display that a move as been accepted
        this.setState({
            view: "GetHandb",
            playable: true
        });
        // if it is x's turn use X image, else O image
        document.getElementById(hand).src = {
            x: X_image, 
            o: O_image,
        }[x ? "x" : "o"];
        if (dev) {
            console.log(`${hand}`);
        }
        // log the state of the board in the console and replace and update the pieces
        for (let i = 0; i <= 26; i++) {
            if (i != 13){
                if (dev) { // log the state X's and O's on the backend 
                    console.log(`${i} ${intToHand[i]} xs[i]=${parseInt(xs[i])} os[i]=${parseInt(os[i])}`);
                } 
                if (parseInt(xs[i]) === 1) { // apply X's where they go on grid
                    document.getElementById(intToHand[i]).src = X_image; 
                } else { 
                    if (parseInt(os[i]) === 1) { // apply O's where they go on grid
                        document.getElementById(intToHand[i]).src = O_image;
                    }
                }
            }
        }
        // return the move
        return handToInt[hand];
    }
    // function to display who won
    endsWith(won, double, oppo, tie) {
        this.setState({
            view: "Finale",
            won: won,
            double: double,
            tie: tie
        });
    }
    print_data(data0, data1, data2, data5, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16) {
        console.log(
                `\nFee        ${data0}` +
                `\nX cells    ${data1}` +
                `\nO cells    ${data2}` +
                `\nX ante     ${data5 / 10 ** 18}` +
                `\nO ante     ${data7 / 10 ** 18}` +
                `\npot total  ${data8 / 10 ** 18}` +
                `\nwager      ${data9 / 10 ** 18}` +
                `\nto X       ${data10 / 10 ** 18}` +
                `\nto O       ${data11 / 10 ** 18}` +
                `\ndouble X   ${data12}` +
                `\ndouble O   ${data13}` +
                `\nX win      ${data14}` +
                `\nO win      ${data15}` +
                `\ntie        ${data16}`
        );
    }
    // Inform the players that a timeout has occurred
    informTimeout() {
        this.setState({
            view: "Timeout"
        });
    }
    // returns hand to Reach
    setImg(box_id) {
        this.state.resolveHandP(box_id);
    }
}
// Create the class for the contract Deployer
class Deployer extends Player {
    // Set the wager
    constructor(props) {
        super(props);
        this.state = {
            view: "SetWager"
        };
    }
    setWager(wager) {
        this.setState({
            view: "Deploy",
            wager
        });
    }
    // Deploy the contract
    async deploy() {
        const ctc = this.props.acc.deploy(backend);
        this.setState({
            view: "Deploying",
            ctc
        });
        this.wager = reach.parseCurrency(this.state.wager); // UInt
        backend.A(ctc, this);
        if (dev) {
            console.log(await reach.getDefaultAccount());
        }
        const ctcInfo = await ctc.getInfo();
        const ctcInfoStr = JSON.stringify(ctcInfo, null, 2);
        this.setState({
            view: "WaitingForAttacher",
            ctcInfoStr
        });
    }
    // render the data returned by the class
    render() {
        return renderView(this, DeployerViews);
    }
}
// Create the class for the opponenent Attaching to the contract
class Attacher extends Player {
    // Display the view for attaching to the deployer
    constructor(props) {
        super(props);
        this.state = {
            view: "Attach"
        };
    }
    // Actually attach
    attach(ctcInfoStr) {
        const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
        this.setState({
            view: "Attaching"
        });
        backend.B(ctc, this);
    }
    // accept the wager proposed by the deployer
    async acceptWager(wagerAtomic) {
        // Fun([UInt], Null)
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise((resolveAcceptedP) => {
            this.setState({
                view: "AcceptTerms",
                wager,
                resolveAcceptedP
            });
        });
    }
    // if the terms have been accepted, display that the player is waiting for his/her turn.
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({
            view: "WaitingForTurn"
        });
    }
    // render that data returned by this class
    render() {
        return renderView(this, AttacherViews);
    }
}
// render the entire script.
renderDOM( < App / > );
