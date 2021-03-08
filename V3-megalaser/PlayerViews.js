import React from "react";

const exports = {};

// const BOARD_3_LEGS = "https://imgur.com/WzpRK4q.png"
// const BOARD_4TH_LEG = "https://imgur.com/uAJ2Kmc.png"

////////////////////////////////////////////
// Player views must be extended.         //
// It does not have its own Wrapper view. //
////////////////////////////////////////////

/////////////////////////////////////
// Page for winning/losing message //
/////////////////////////////////////

exports.Finale = class extends React.Component {
    render() {
        const {won, double, tie} = this.props;
            let outcome = "";
            if (double) {
                outcome = "YOU WON TWO WAYS: YOU GAIN THE FULL GAME WAGER";
            } else if (tie) {
                outcome = "TIE: YOU GAIN YOUR OPPONENT'S EXPENDITURE AND LOSE YOUR OWN";
            } else if (won) {
                outcome = "YOU WON: YOU GAIN YOUR OPPONENT'S EXPENDITURE";
            } else {
                outcome = "YOU LOST.";
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
            <div>
                <audio id="bling">
                    <source src="https://orangefreesounds.com/wp-content/uploads/2021/03/Air-horn-noise.mp3" type="audio/mpeg"></source>
                </audio>
                <div className="container">
                    <center>
                        <img
                            src="https://i.imgur.com/MU4IAQ3.png"
                            width="1100px"
                            height="880px"
                            style={{
                                zIndex: 1,
                                top:"0px",
                                position: "absolute",
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
                                top: "170px",
                                left: "50%",
                                marginLeft: "-720px",
                            }}
                        >
                            <div className="drop-targets" >
                                <pre>                                  </pre>
                                <img
                                    className="box7"
                                    onClick={() => parent.setImg("box7")}
                                    id="box7"
                                ></img>
                                <pre>      </pre>
                                <img
                                    className="box8"
                                    onClick={() => parent.setImg("box8")}
                                    id="box8"
                                ></img>
                                <pre>      </pre>
                                <img
                                    className="box9"
                                    onClick={() => parent.setImg("box9")}
                                    id="box9"
                                ></img>
                                <pre></pre>
                            </div>
                        </div>
                        <div
                            style={{
                                zIndex: 3,
                                position: "absolute",
                                top: "300px",
                                left: "50%",
                                marginLeft: "-720px",
                            }}
                        >


                            <div className="drop-targets" >
                                <pre>                            </pre>
                                <img
                                    className="box4"
                                    onClick={() => parent.setImg("box4")}
                                    id="box4"
                                ></img>
                                <pre>        </pre>
                                <img
                                    className="box5"
                                    onClick={() => parent.setImg("box5")}
                                    id="box5"
                                ></img>
                                <pre>       </pre>
                                <img
                                    className="box6"
                                    onClick={() => parent.setImg("box6")}
                                    id="box6"
                                ></img>
                                <pre></pre>
                            </div>
                        </div>
                        <div
                            style={{
                                zIndex: 4,
                                position: "absolute",
                                top: "420px",
                                left: "50%",
                                marginLeft: "-720px",
                            }}
                        >


                            <div className="drop-targets" >
                                <pre>                       </pre>
                                <img
                                    className="box1"
                                    onClick={() => parent.setImg("box1")}
                                    id="box1"
                                ></img>
                                <pre>       </pre>
                                <img
                                    className="box2"
                                    onClick={() => parent.setImg("box2")}
                                    id="box2"
                                ></img>
                                <pre>        </pre>
                                <img
                                    className="box3"
                                    onClick={() => parent.setImg("box3")}
                                    id="box3"
                                ></img>
                                <pre> </pre>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
};

//////////////////////////////
// Get the move of a player //
//////////////////////////////

/*/
<img
                            src="https://imgur.com/suCVly6.png"
                            width="500px"
                            style={{
                                zIndex: 0,
                                width:"100wh",
                                height:"100vh"
                            }}
                        ></img>
/*/




exports.GetHand = class extends React.Component {
    render() {
        const {parent, xs, os} = this.props;
        return (
            <div style={{top:"0px"}}>
                <audio id="bling">
                    <source src="https://orangefreesounds.com/wp-content/uploads/2021/03/Air-horn-noise.mp3" type="audio/mpeg"></source>
                </audio>
                <div className="container">
                    <center>
                        
                        <img
                            src="https://imgur.com/WzpRK4q.png"
                            width="33wh"
                            style={{
                                zIndex: 1,
                                top:"0px",
                                position: "absolute",
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
                                top: "170px",
                                left: "50%",
                                marginLeft: "-720px",
                            }}
                        >
                            <div className="drop-targets" >
                                <pre>                                  </pre>
                                <img
                                    className="box9"
                                    onClick={() => parent.setImg("box9")}
                                    id="box9"
                                ></img>
                                <pre>  </pre>
                                <img
                                    className="box10"
                                    onClick={() => parent.setImg("box10")}
                                    id="box10"
                                ></img>
                                <pre>  </pre>
                                <img
                                    className="box11"
                                    onClick={() => parent.setImg("box11")}
                                    id="box11"
                                ></img>
                                <pre></pre>
                            </div>
                        </div>
                        <div
                            style={{
                                zIndex: 3,
                                position: "absolute",
                                top: "213px",
                                left: "50%",
                                marginLeft: "-720px",
                            }}
                        >
                            <div className="drop-targets" >
                                <pre>                            </pre>
                                <img
                                    className="box12"
                                    onClick={() => parent.setImg("box12")}
                                    id="box12"
                                ></img>
                                <pre>   </pre>
                                <img
                                    className="box13"
                                    onClick={() => parent.setImg("box13")}
                                    id="box13"
                                ></img>
                                <pre>   </pre>
                                <img
                                    className="box14"
                                    onClick={() => parent.setImg("box14")}
                                    id="box14"
                                ></img>
                                <pre></pre>
                            </div>
                        </div>
                        <div
                            style={{
                                zIndex: 4,
                                position: "absolute",
                                top: "256px",
                                left: "50%",
                                marginLeft: "-720px",
                            }}
                        >
                            <div className="drop-targets" >
                                <pre>                       </pre>
                                <img
                                    className="box15"
                                    onClick={() => parent.setImg("box15")}
                                    id="box15"
                                ></img>
                                <pre>  </pre>
                                <img
                                    className="box16"
                                    onClick={() => parent.setImg("box16")}
                                    id="box16"
                                ></img>
                                <pre>  </pre>
                                <img
                                    className="box17"
                                    onClick={() => parent.setImg("box17")}
                                    id="box17"
                                ></img>
                                <pre> </pre>
                            </div>
                        </div>
                    </center>
                    <img
                        src="https://imgur.com/uAJ2Kmc.png"
                        width="500px"
                        style={{
                            zIndex: 1,
                            top:"0px",
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-550px",
                        }}
                    ></img>
                </div>
                <center>Your turn.</center>
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
