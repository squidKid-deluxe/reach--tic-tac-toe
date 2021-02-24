import React from "react";
import AppViews from "./views/AppViews";
import DeployerViews from "./views/DeployerViews";
import AttacherViews from "./views/AttacherViews";
import { renderDOM, renderView } from "./views/render";
import "./index.css";
import * as backend from "./build/index.main.mjs";
import * as reach from "@reach-sh/stdlib/ETH";

// currency default
const { standardUnit } = reach;
// convert keyboard numeric keypad input layout to reach back end
const handToInt = { "1": 6, "2": 7, "3": 8, "4": 3, "5": 4, "6": 5, "7": 0, "8": 1, "9": 2 };
// set default variables, wager, account fund amount and standard unit
const defaults = { defaultFundAmt: "10", defaultWager: "3", standardUnit };

// App class
class App extends React.Component {
    // Starting screen, aka Connecting accounts
    constructor(props) {
        super(props);
        this.state = { view: "ConnectAccount", ...defaults };
    }

    // When the player's account has connected, either ask them to fund their account or simply start the game
    async componentDidMount() {
        const acc = await reach.getDefaultAccount();
        const balAtomic = await reach.balanceOf(acc);
        const bal = reach.formatCurrency(balAtomic, 4);
        this.setState({ acc, bal });
        try {
            const faucet = await reach.getFaucet();
            this.setState({ view: "FundAccount", faucet });
        } catch (e) {
            this.setState({ view: "DeployerOrAttacher" });
        }
    }

    // Fund the given account and then start the game
    async fundAccount(fundAmount) {
        await reach.transfer(this.state.faucet, this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({ view: "DeployerOrAttacher" });
    }

    // Skip funding the account and continue to the game
    async skipFundAccount() {
        this.setState({ view: "DeployerOrAttacher" });
    }

    // HAve the user select if they want to be an attacher or a deployer
    selectAttacher() {
        this.setState({ view: "Wrapper", ContentView: Attacher });
    }
    selectDeployer() {
        this.setState({ view: "Wrapper", ContentView: Deployer });
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
    async getHand() {
        // Fun([], UInt)
        this.setState({ view: "makeCanvas" });
        // create canvas context to draw granite background
        var cvs_granite = document.getElementById("granite");
        var cxt_granite = cvs_granite.getContext("2d");

        // create canvas context to draw board
        var cvs_board = document.getElementById("board");
        var cxt_board = cvs_board.getContext("2d");

        // create canvas context to draw X's and O's
        var cvs_xo = document.getElementById("xsandos");
        var cxt_xo = cvs_xo.getContext("2d");

        // Draw granite and board upon appropriate layer
        draw_granite();
        draw_board();

        // draw specific X's, numbered by numeric keypad
        draw_x7();
        draw_x4();
        draw_x1();
        draw_x8();
        draw_x5();
        draw_x2();
        draw_x9();
        draw_x6();
        draw_x3();

        // draw specific O's, numbered by numeric keypad
        draw_o7();
        draw_o4();
        draw_o1();
        draw_o8();
        draw_o5();
        draw_o2();
        draw_o9();
        draw_o6();
        draw_o3();

        // coordinate map x's and o's
        // so left column
        function draw_o7() {
            draw_piece("o", 150, 95, 50, 50);
        }
        function draw_o4() {
            draw_piece("o", 115, 170, 55, 55);
        }
        function draw_o1() {
            draw_piece("o", 80, 250, 60, 60);
        }
        // o center column
        function draw_o8() {
            draw_piece("o", 240, 110, 52, 52);
        }
        function draw_o5() {
            draw_piece("o", 220, 185, 57, 57);
        }
        function draw_o2() {
            draw_piece("o", 192, 270, 62, 62);
        }
        // o right column
        function draw_o9() {
            draw_piece("o", 340, 130, 54, 54);
        }
        function draw_o6() {
            draw_piece("o", 325, 205, 59, 59);
        }
        function draw_o3() {
            draw_piece("o", 310, 290, 64, 64);
        }
        // x left column
        function draw_x7() {
            draw_piece("x", 150, 95, 50, 50);
        }
        function draw_x4() {
            draw_piece("x", 115, 170, 55, 55);
        }
        function draw_x1() {
            draw_piece("x", 80, 250, 60, 60);
        }
        // x center column
        function draw_x8() {
            draw_piece("x", 240, 110, 52, 52);
        }
        function draw_x5() {
            draw_piece("x", 220, 185, 57, 57);
        }
        function draw_x2() {
            draw_piece("x", 192, 270, 62, 62);
        }
        // x right column
        function draw_x9() {
            draw_piece("x", 340, 130, 54, 54);
        }
        function draw_x6() {
            draw_piece("x", 325, 205, 59, 59);
        }
        function draw_x3() {
            draw_piece("x", 310, 290, 64, 64);
        }

        // Draw X symbol at location of size
        function draw_piece(piece, x, y, h, w) {
            const urls = {
                x: "https://imgur.com/eBsDAXr.png",
                o: "https://imgur.com/h1xuIW1.png",
            };
            const base_image = new Image();
            base_image.src = urls[piece];

            base_image.onload = function () {
                cxt_xo.drawImage(base_image, x, y, h, w);
            };
        }

        // Draw granite background
        function draw_granite() {
            const base_image = new Image();
            base_image.src = "https://imgur.com/8xyLP7U.png";
            base_image.onload = function () {
                cxt_granite.drawImage(base_image, 0, 0, 500, 500);
            };
        }

        // Draw tic tac toe game board
        function draw_board() {
            const base_image = new Image();
            base_image.src = "https://imgur.com/ppFPJWm.png";
            base_image.onload = function () {
                cxt_board.drawImage(base_image, 0, 0, 500, 500);
            };
        }

        // Present the buttons to the user so that they can actually select their move
        const hand = await new Promise((resolveHandP) => {
            this.setState({ view: "GetHand", playable: true, resolveHandP });
        });

        // Display that a move as been accepted
        this.setState({ view: "GetHandb", playable: true });

        // return the move
        return handToInt[hand];
    }

    // function to display who won
    endsWith(won) {
        this.setState({ view: "Finale", whowon: won });
    }

    // Inform the players that a timeout has occurred
    informTimeout() {
        this.setState({ view: "Timeout" });
    }

    // ???
    playHand(hand) {
        this.state.resolveHandP(hand);
    }
}

// Create the class for things that only apply to a deployer
class Deployer extends Player {
    // Set the wager
    constructor(props) {
        super(props);
        this.state = { view: "SetWager" };
    }
    setWager(wager) {
        this.setState({ view: "Deploy", wager });
    }

    // Deploy the contract
    async deploy() {
        const ctc = this.props.acc.deploy(backend);
        this.setState({ view: "Deploying", ctc });
        this.wager = reach.parseCurrency(this.state.wager); // UInt
        backend.A(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({ view: "WaitingForAttacher", ctcInfoStr });
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
        this.state = { view: "Attach" };
    }
    // Actually attach
    attach(ctcInfoStr) {
        const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
        this.setState({ view: "Attaching" });
        backend.B(ctc, this);
    }

    // accept the wager proposed by the deployer
    async acceptWager(wagerAtomic) {
        // Fun([UInt], Null)
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise((resolveAcceptedP) => {
            this.setState({ view: "AcceptTerms", wager, resolveAcceptedP });
        });
    }
    // if the terms have been accepted, display that the player is waiting for his/her turn.
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({ view: "WaitingForTurn" });
    }

    // render that data returned by this class
    render() {
        return renderView(this, AttacherViews);
    }
}

// render the entire script.
renderDOM(<App />);
