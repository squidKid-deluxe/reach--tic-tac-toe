import React from "react";

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.
exports.Finale = class extends React.Component {
    render() {
        const { whowon } = this.props;
        return (
            <div>
                <h1>{!whowon ? "YOU WIN!" : "YOU LOST!"}</h1>
            </div>
        );
    }
};

exports.makeCanvas = class extends React.Component {
    render() {
        return (
            <div style={{ width: 500, height: 500 }}>
                <canvas id="granite" width="500" height="500" style={{ zIndex: 0 }}>
                    bah humbug
                </canvas>
                <canvas id="board" width="500" height="500" style={{ zIndex: 1 }}>
                    bah humbug
                </canvas>
                <canvas id="xsandos" width="500" height="500" style={{ zIndex: 2 }}>
                    bah humbug
                </canvas>
            </div>
        );
    }
};

exports.GetHandb = class extends React.Component {
    render() {
        const { parent } = this.props;
        return (
            <div>
                <h3>Waiting for the other player to play their move...</h3>
            </div>
        );
    }
};

exports.GetHand = class extends React.Component {
    render() {
        const { parent, playable, hand } = this.props;
        return (
            <div>
                {hand ? "Pick again." : ""}
                <br />
                {!playable ? "Please wait..." : ""}
                <br />
                <button disabled={!playable} onClick={() => parent.playHand("7")} id="numpad">
                    7
                </button>
                <button disabled={!playable} onClick={() => parent.playHand("8")} id="numpad">
                    8
                </button>
                <button disabled={!playable} onClick={() => parent.playHand("9")} id="numpad">
                    9
                </button>
                <br />
                <br />
                <button disabled={!playable} onClick={() => parent.playHand("4")} id="numpad">
                    4
                </button>
                <button disabled={!playable} onClick={() => parent.playHand("5")} id="numpad">
                    5
                </button>
                <button disabled={!playable} onClick={() => parent.playHand("6")} id="numpad">
                    6
                </button>
                <br />
                <br />
                <button disabled={!playable} onClick={() => parent.playHand("1")} id="numpad">
                    1
                </button>
                <button disabled={!playable} onClick={() => parent.playHand("2")} id="numpad">
                    2
                </button>
                <button disabled={!playable} onClick={() => parent.playHand("3")} id="numpad">
                    3
                </button>
                <br />
            </div>
        );
    }
};

exports.Timeout = class extends React.Component {
    render() {
        return <div>There's been a timeout. (Someone took too long.)</div>;
    }
};

export default exports;
