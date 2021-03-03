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
// convert keyboard numeric keypad input layout to reach back end
const handToInt = {
    "box7": 0,
    "box8": 1,
    "box9": 2,
    "box4": 3,
    "box5": 4,
    "box6": 5,
    "box1": 6,
    "box2": 7,
    "box3": 8
};

const intToHand = {
    1: "box1",
    2: "box2",
    3: "box3",
    4: "box4",
    5: "box5",
    6: "box6",
    7: "box7",
    8: "box8",
    9: "box9"
};

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
        const acc = await reach.getDefaultAccount();
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

    // HAve the user select if they want to be an attacher or a deployer
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
    async getHand(x, xs, os) {
        // Present the buttons to the user so that they can actually select their move
        const hand = await new Promise((resolveHandP) => {
            this.setState({
                view: "GetHand",
                resolveHandP,
                xs,
                os
            });
        });

        document.getElementById("os").body = os[1];
        document.getElementById("xs").body = xs[0];

        document.getElementById(hand).src = {
            x: "https://imgur.com/eBsDAXr.png",
            o: "https://imgur.com/h1xuIW1.png",
        }[x ? "x" : "o"];

        for (var i = 0; i < xs.length; i++) {
            if (xs[i] === 1) {
                document.getElementById(intToHand[i + 1]).src = "https://imgur.com/eBsDAXr.png";
            }
        }

        for (i = 0; i < xs.length; i++) {
            if (os[i] === 1) {
                document.getElementById(intToHand[i + 1]).src = "https://imgur.com/h1xuIW1.png";
            }
        }
        // xs[0] == 1
        // ? "https://imgur.com/eBsDAXr.png"
        // : os[0] == 1
        // ? "https://imgur.com/h1xuIW1.png"
        // : "https://imgur.com/XJRRpD8.png"

        // Display that a move as been accepted
        this.setState({
            view: "GetHandb",
            playable: true
        });

        document.getElementById(hand).src = {
            x: "https://imgur.com/eBsDAXr.png",
            o: "https://imgur.com/h1xuIW1.png",
        }[x ? "x" : "o"];

        for (i = 0; i < xs.length; i++) {
            if (xs[i] === 1) {
                document.getElementById(intToHand[i + 1]).src = "https://imgur.com/eBsDAXr.png";
            }
        }

        for (i = 0; i < xs.length; i++) {
            if (os[i] === 1) {
                document.getElementById(intToHand[i + 1]).src = "https://imgur.com/h1xuIW1.png";
            }
        }

        // return the move
        return handToInt[hand];
    }

    // function to display who won
    endsWith(won) {
        this.setState({
            view: "Finale",
            whowon: won
        });
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

// Create the class for things that only apply to a deployer
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
        console.log(`before deploying`);
        const ctc = this.props.acc.deploy(backend);
        console.log(`after deploying`);
        this.setState({
            view: "Deploying",
            ctc
        });
        console.log(`after deploying screen is set`);
        this.wager = reach.parseCurrency(this.state.wager); // UInt
        console.log(`wager parsed`)
        backend.A(ctc, this);
        console.log(`backend.A()`);
        const ctcInfo = await ctc.getInfo();
        console.log(`got the contract info`)
        const ctcInfoStr = JSON.stringify(ctcInfo, null, 2);
        console.log(`stringified the contract info`);
        this.setState({
            view: "WaitingForAttacher",
            ctcInfoStr
        });
        console.log(`set the attacher waiting screen`);
    }

    // render the data returned by the class
    render() {
        return renderView(this, DeployerViews);
    }
}

// Create the class for things that are specific to the Attacher
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
