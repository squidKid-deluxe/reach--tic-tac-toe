import React from "react";
import PlayerViews from "./PlayerViews";

const exports = {...PlayerViews};

//////////////////////////////////
// Wrapper page fo the deployer //
//////////////////////////////////

exports.Wrapper = class extends React.Component {
    render() {
        const {content} = this.props;
        return (
            <div className="Deployer">
                <h2>Deployer (Alice)</h2>
                {content}
            </div>
        );
    }
};

////////////////////////////////////////
// Page to set the wager for the game //
////////////////////////////////////////

exports.SetWager = class extends React.Component {
    render() {
        const {parent, defaultWager, standardUnit} = this.props;
        const wager = (this.state || {}).wager || defaultWager;
        return (
            <div>
                <input
                    type="number"
                    placeholder={defaultWager}
                    onChange={(e) =>
                        this.setState({wager: e.currentTarget.value})
                    }
                />{" "}
                {standardUnit}
                <br />
                <button onClick={() => parent.setWager(wager)}>
                    Set wager
                </button>
            </div>
        );
    }
};

///////////////////////////////////
// Screen to deploy the contract //
///////////////////////////////////

exports.Deploy = class extends React.Component {
    render() {
        const {parent, wager, standardUnit} = this.props;
        return (
            <div>
                Wager (pay to deploy): <strong>{wager}</strong> {standardUnit}
                <br />
                <button onClick={() => parent.deploy()}>Deploy</button>
            </div>
        );
    }
};

////////////////////////////////////////////////
// Display that we are deploying the contract //
////////////////////////////////////////////////

exports.Deploying = class extends React.Component {
    render() {
        return <div>Deploying... please wait.</div>;
    }
};

/////////////////////////////////////////////////////////////////////////////////
// Give the contract info and say that we are waiting for the attacher to join //
/////////////////////////////////////////////////////////////////////////////////

exports.WaitingForAttacher = class extends React.Component {
    render() {
        const {ctcInfoStr} = this.props;
        return (
            <div>
                Waiting for Attacher to join...
                <br /> Please give them this contract info:
                <pre className="ContractInfoD">{ctcInfoStr}</pre>
            </div>
        );
    }
};

export default exports;
