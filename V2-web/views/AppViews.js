import React from "react";

const exports = {};

// FIXME:  Add start screen
// exports.Start = class extends React.Component

/////////////////////////////////////////////////////////////////////////
// The content defined here will be displayed at the top of every page //
/////////////////////////////////////////////////////////////////////////

exports.Wrapper = class extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div className="App">
                <br />
                <img
                    src="https://i.imgur.com/j5j7Nqb.png"
                    alt="logo"
                    style={{width: 500, height: 50}}
                ></img>
                <br />
                <br />
                <img
                    src="https://imgur.com/CvC4dQR.png"
                    alt="title"
                    style={{width: 500, height: 50}}
                ></img>
                <header className="App-header" id="root">
                    {content}
                </header>
            </div>
        );
    }
};

//
//
//

exports.Start = class extends React.Component {
    render() {
        return (
            <div id="bullutin">
                <p style={{fontSize: 50}}>
                    Rules of the game:
                    <br />
                    1) if you decide to remove yourself from the game before it
                    ends, YOU WILL LOSE ALL YOUR FUNDS!!!
                    <br />
                    2) Wager is collected at the start of the game, but fees for
                    particular spots are collected throughout the game
                </p>
                <button onClick="">I Agree</button>
            </div>
        );
    }
};

///////////////////////////////////////////////////
// Create the page for connecting to the account //
///////////////////////////////////////////////////

exports.ConnectAccount = class extends React.Component {
    render() {
        return (
            <div>
                Please wait while we connect to your account. If this takes more
                than a few seconds, there may be something wrong.
            </div>
        );
    }
};

/////////////////////////////////////////////////
// Fund a devnet account if the user so wishes //
/////////////////////////////////////////////////

exports.FundAccount = class extends React.Component {
    render() {
        const {bal, standardUnit, defaultFundAmt, parent} = this.props;
        const amt = (this.state || {}).amt || defaultFundAmt;
        return (
            <div>
                <h2>Fund account</h2>
                <br />
                Balance: {bal} {standardUnit}
                <hr />
                Would you like to fund your account with additional{" "}
                {standardUnit}?
                <br />
                (This only works on certain devnets)
                <br />
                <input
                    type="number"
                    placeholder={defaultFundAmt}
                    onChange={(e) =>
                        this.setState({amt: e.currentTarget.value})
                    }
                />
                <button onClick={() => parent.fundAccount(amt)}>
                    Fund Account
                </button>
                <button onClick={() => parent.skipFundAccount()}>Skip</button>
            </div>
        );
    }
};

////////////////////////////////////////////////////////
// Ask if a player wants to be a deployer or attacher //
////////////////////////////////////////////////////////

exports.DeployerOrAttacher = class extends React.Component {
    render() {
        const {parent} = this.props;
        return (
            <div>
                Please select a role:
                <br />
                <p>
                    <button onClick={() => parent.selectDeployer()}>
                        Deployer
                    </button>
                    <br /> Set the wager, deploy the contract.
                </p>
                <p>
                    <button onClick={() => parent.selectAttacher()}>
                        Attacher
                    </button>
                    <br /> Attach to the Deployer's contract.
                </p>
            </div>
        );
    }
};

export default exports;
