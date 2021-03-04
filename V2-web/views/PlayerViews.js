import React from "react";

const exports = {};

////////////////////////////////////////////
// Player views must be extended.         //
// It does not have its own Wrapper view. //
////////////////////////////////////////////

/////////////////////////////////////
// Page for winning/losing message //
/////////////////////////////////////

exports.Finale = class extends React.Component {
    render() {
        const {won, double, oppo_double, tie} = this.props;
            let outcome = "";
            if (double) {
                outcome = "YOU WON TWO WAYS: YOU GAIN THE FULL GAME WAGER";
            } else if (oppo_double) {
                outcome = "YOU LOST TWO WAYS: YOU LOSE THE FULL GAME WAGER";
            } else if (won) {
                outcome = "YOU WON: YOU GAIN YOUR OPPONENT'S EXPENDITURE";
            } else if (!won) {
                outcome = "YOU LOST: YOU LOSE YOUR EXPENDITURE";
            } else if (tie) {
                outcome = "TIE: YOU GAIN YOUR OPPONENT'S COST AND LOSE YOUR OWN COST";
            }

            return (
                <div>
                    <h1>{outcome}</h1>
                </div>
            );
    }
};

/////////////////////////////////////////////////////////
// Get hand function for waiting for the other player. //
/////////////////////////////////////////////////////////

/* eslint-disable */

//<div className="container">
//<p id="xs">ummm</p>
//<p id="os"></p>

exports.GetHandb = class extends React.Component {
    render() {
        const {parent, xs, os} = this.props;
        return (
            <div className="container">
                <center>
                    <img
                        src="https://imgur.com/CsxXjde.png"
                        width="1100px"
                        height="880px"
                        style={{
                            zIndex: 0,
                            position: "absolute",
                            top: "400px",
                            left: "50%",
                            marginLeft: "-550px",
                        }}
                    ></img>
                </center>
                <center>
                    <img
                        src="https://imgur.com/Hla2Ybx.png"
                        width="1100px"
                        height="880px"
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            top: "400px",
                            left: "50%",
                            marginLeft: "-550px",
                        }}
                    ></img>
                </center>
                <center>
                    <div
                        style={{
                            zIndex: 2,
                            position: "absolute",
                            top: "600px",
                            left: "50%",
                            marginLeft: "-700px",
                        }}
                    >
                        <div className="drop-targets">
                            <pre>                                  </pre>
                            <img
                                className="box7"
                                id="box7"
                            ></img>
                            <pre>          </pre>
                            <img
                                className="box8"
                                id="box8"
                            ></img>
                            <pre>          </pre>
                            <img
                                className="box9"
                                id="box9"
                            ></img>
                            <pre></pre>
                        </div>
                        <div className="drop-targets">
                            <pre>                           </pre>
                            <img
                                className="box4"
                                id="box4"
                            ></img>
                            <pre>         </pre>
                            <img
                                className="box5"
                                id="box5"
                            ></img>
                            <pre>         </pre>
                            <img
                                className="box6"
                                id="box6"
                            ></img>
                            <pre></pre>
                        </div>
                        <div className="drop-targets">
                            <pre>                      </pre>
                            <img
                                className="box1"
                                id="box1"
                            ></img>
                            <pre>        </pre>
                            <img
                                className="box2"
                                id="box2"
                            ></img>
                            <pre>         </pre>
                            <img
                                className="box3"
                                id="box3"
                            ></img>
                            <pre></pre>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
};

//////////////////////////////
// Get the move of a player //
//////////////////////////////

exports.GetHand = class extends React.Component {
    render() {
        const {parent, xs, os} = this.props;
        return (
            <div className="container">
                <p id="xs">ummm</p>
                <p id="os"></p>
                <center>
                    <img
                        src="https://imgur.com/CsxXjde.png"
                        width="1100px"
                        height="880px"
                        style={{
                            zIndex: 0,
                            position: "absolute",
                            top: "400px",
                            left: "50%",
                            marginLeft: "-550px",
                        }}
                    ></img>
                </center>
                <center>
                    <img
                        src="https://imgur.com/Hla2Ybx.png"
                        width="1100px"
                        height="880px"
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            top: "400px",
                            left: "50%",
                            marginLeft: "-550px",
                        }}
                    ></img>
                </center>
                <center>
                    <div
                        style={{
                            zIndex: 2,
                            position: "absolute",
                            top: "600px",
                            left: "50%",
                            marginLeft: "-700px",
                        }}
                    >
                        <div className="drop-targets">
                            <pre>                                  </pre>
                            <img
                                className="box7"
                                onClick={() => parent.setImg("box7")}
                                id="box7"
                            ></img>
                            <pre>          </pre>
                            <img
                                className="box8"
                                onClick={() => parent.setImg("box8")}
                                id="box8"
                            ></img>
                            <pre>          </pre>
                            <img
                                className="box9"
                                onClick={() => parent.setImg("box9")}
                                id="box9"
                            ></img>
                            <pre></pre>
                        </div>
                        <div className="drop-targets">
                            <pre>                           </pre>
                            <img
                                className="box4"
                                onClick={() => parent.setImg("box4")}
                                id="box4"
                            ></img>
                            <pre>         </pre>
                            <img
                                className="box5"
                                onClick={() => parent.setImg("box5")}
                                id="box5"
                            ></img>
                            <pre>         </pre>
                            <img
                                className="box6"
                                onClick={() => parent.setImg("box6")}
                                id="box6"
                            ></img>
                            <pre></pre>
                        </div>
                        <div className="drop-targets">
                            <pre>                      </pre>
                            <img
                                className="box1"
                                onClick={() => parent.setImg("box1")}
                                id="box1"
                            ></img>
                            <pre>        </pre>
                            <img
                                className="box2"
                                onClick={() => parent.setImg("box2")}
                                id="box2"
                            ></img>
                            <pre>         </pre>
                            <img
                                className="box3"
                                onClick={() => parent.setImg("box3")}
                                id="box3"
                            ></img>
                            <pre></pre>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
};
/* eslint-disable */

/////////////////////
// Timeout message //
/////////////////////

exports.Timeout = class extends React.Component {
    render() {
        return <div>There's been a timeout. (Someone took too long.)</div>;
    }
};

//////////////////////////
// Export the functions //
//////////////////////////

export default exports;
