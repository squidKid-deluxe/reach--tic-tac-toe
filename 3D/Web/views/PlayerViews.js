import React from "react";
const exports = {};
// const BOARD_3_LEGS = "https://imgur.com/1Jh4uSL.png"
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

//https://imgur.com/WzpRK4q.png three leg board
//https://imgur.com/1Jh4uSL.png three leg board with cut out
//https://imgur.com/ci7t7RU.png fourth leg 51x1061
//https://imgur.com/zwHUzjY.png three leg board cut out leg and middle
/////////////////////////////////////////////////////////
// Get hand function for waiting for the other player. //
/////////////////////////////////////////////////////////
/* eslint-disable */
exports.GetHandb = class extends React.Component {
    render() {
        const {parent, xs, os} = this.props;
        return (
            <div style={{top:"0px"}}>
                <audio id="bling">
                    <source src="https://orangefreesounds.com/wp-content/uploads/2021/03/Air-horn-noise.mp3" type="audio/mpeg"></source>
                </audio>
                <div className="container">
                    <center>
                        <div
                            style={{
                                zIndex: 0,
                                position: "absolute",
                                top:"300px",
                                left: "50%",
                                marginLeft: "-250px",
                            }}
                        >
                            <img
                                src="https://imgur.com/zwHUzjY.png"
                                width="500px"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "334px",
                                left: "50%",
                                marginLeft: "-75px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box0"
                                id="box0"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "344px",
                                left: "50%",
                                marginLeft: "9px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box1"
                                id="box1"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "354px",
                                left: "50%",
                                marginLeft: "100px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box2"
                                id="box2"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "360px",
                                left: "50%",
                                marginLeft: "-102px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box3"
                                id="box3"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "372px",
                                left: "50%",
                                marginLeft: "-12px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box4"
                                id="box4"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "385px",
                                left: "50%",
                                marginLeft: "84px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box5"
                                id="box5"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "390px",
                                left: "50%",
                                marginLeft: "-130px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box6"
                                id="box6"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "405px",
                                left: "50%",
                                marginLeft: "-35px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box7"
                                id="box7"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "419px",
                                left: "50%",
                                marginLeft: "72px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box8"
                                id="box8"
                            ></img>
                        </div>
            
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "457px",
                                left: "50%",
                                marginLeft: "-80px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box9"
                                id="box9"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "470px",
                                left: "50%",
                                marginLeft: "5px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box10"
                                id="box10"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "484px",
                                left: "50%",
                                marginLeft: "94px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box11"
                                id="box11"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "495px",
                                left: "50%",
                                marginLeft: "-110px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box12"
                                id="box12"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "509px",
                                left: "50%",
                                marginLeft: "-15px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box13"
                                id="box13"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "523px",
                                left: "50%",
                                marginLeft: "77px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box14"
                                id="box14"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "538px",
                                left: "50%",
                                marginLeft: "-145px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box15"
                                id="box15"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "554px",
                                left: "50%",
                                marginLeft: "-43px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box16"
                                id="box16"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "570px",
                                left: "50%",
                                marginLeft: "62px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box17"
                                id="box17"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "624px",
                                left: "50%",
                                marginLeft: "-97px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box18"
                                id="box18"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "638px",
                                left: "50%",
                                marginLeft: "-3px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box19"
                                id="box19"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "653px",
                                left: "50%",
                                marginLeft: "92px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box20"
                                id="box20"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "680px",
                                left: "50%",
                                marginLeft: "-127px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box21"
                                id="box21"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "696px",
                                left: "50%",
                                marginLeft: "-25px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box22"
                                id="box22"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "711px",
                                left: "50%",
                                marginLeft: "75px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box23"
                                id="box23"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "743px",
                                left: "50%",
                                marginLeft: "-162px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box24"
                                id="box24"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "762px",
                                left: "50%",
                                marginLeft: "-55px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box25"
                                id="box25"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "782px",
                                left: "50%",
                                marginLeft: "59px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box26"
                                id="box26"
                            ></img>
                        </div>
                        <div
                            style={{
                                zIndex: 2,
                                position: "absolute",
                                top:"483px",
                                left: "50%",
                                marginLeft: "138px",
                            }}
                        >
                            <img
                                src="https://imgur.com/ci7t7RU.png"
                                width="17px"
                            ></img>
                        </div>
                        <div
                            style={{
                                zIndex: 3,
                                position: "absolute",
                                top:"118px",
                                left: "50%",
                                marginLeft: "-281px",
                            }}
                        >"Please wait while your opponent selects a move."
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
                        <div
                            style={{
                                zIndex: 0,
                                position: "absolute",
                                top:"300px",
                                left: "50%",
                                marginLeft: "-250px",
                            }}
                        >
                            <img
                                src="https://imgur.com/zwHUzjY.png"
                                width="500px"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "334px",
                                left: "50%",
                                marginLeft: "-75px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box0"
                                onClick={() => parent.setImg("box0")}
                                id="box0"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "344px",
                                left: "50%",
                                marginLeft: "9px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box1"
                                onClick={() => parent.setImg("box1")}
                                id="box1"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "354px",
                                left: "50%",
                                marginLeft: "100px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box2"
                                onClick={() => parent.setImg("box2")}
                                id="box2"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "360px",
                                left: "50%",
                                marginLeft: "-102px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box3"
                                onClick={() => parent.setImg("box3")}
                                id="box3"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "372px",
                                left: "50%",
                                marginLeft: "-12px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box4"
                                onClick={() => parent.setImg("box4")}
                                id="box4"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "385px",
                                left: "50%",
                                marginLeft: "84px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box5"
                                onClick={() => parent.setImg("box5")}
                                id="box5"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "390px",
                                left: "50%",
                                marginLeft: "-130px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box6"
                                onClick={() => parent.setImg("box6")}
                                id="box6"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "405px",
                                left: "50%",
                                marginLeft: "-35px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box7"
                                onClick={() => parent.setImg("box7")}
                                id="box7"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "419px",
                                left: "50%",
                                marginLeft: "72px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box8"
                                onClick={() => parent.setImg("box8")}
                                id="box8"
                            ></img>
                        </div>
            
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "457px",
                                left: "50%",
                                marginLeft: "-80px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box9"
                                onClick={() => parent.setImg("box9")}
                                id="box9"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "470px",
                                left: "50%",
                                marginLeft: "5px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box10"
                                onClick={() => parent.setImg("box10")}
                                id="box10"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "484px",
                                left: "50%",
                                marginLeft: "94px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box11"
                                onClick={() => parent.setImg("box11")}
                                id="box11"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "495px",
                                left: "50%",
                                marginLeft: "-110px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box12"
                                onClick={() => parent.setImg("box12")}
                                id="box12"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "509px",
                                left: "50%",
                                marginLeft: "-15px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box13"
                                onClick={() => parent.setImg("box13")}
                                id="box13"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "523px",
                                left: "50%",
                                marginLeft: "77px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box14"
                                onClick={() => parent.setImg("box14")}
                                id="box14"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "538px",
                                left: "50%",
                                marginLeft: "-145px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box15"
                                onClick={() => parent.setImg("box15")}
                                id="box15"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "554px",
                                left: "50%",
                                marginLeft: "-43px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box16"
                                onClick={() => parent.setImg("box16")}
                                id="box16"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "570px",
                                left: "50%",
                                marginLeft: "62px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box17"
                                onClick={() => parent.setImg("box17")}
                                id="box17"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "624px",
                                left: "50%",
                                marginLeft: "-97px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box18"
                                onClick={() => parent.setImg("box18")}
                                id="box18"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "638px",
                                left: "50%",
                                marginLeft: "-3px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box19"
                                onClick={() => parent.setImg("box19")}
                                id="box19"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "653px",
                                left: "50%",
                                marginLeft: "92px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box20"
                                onClick={() => parent.setImg("box20")}
                                id="box20"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "680px",
                                left: "50%",
                                marginLeft: "-127px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box21"
                                onClick={() => parent.setImg("box21")}
                                id="box21"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "696px",
                                left: "50%",
                                marginLeft: "-25px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box22"
                                onClick={() => parent.setImg("box22")}
                                id="box22"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "711px",
                                left: "50%",
                                marginLeft: "75px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box23"
                                onClick={() => parent.setImg("box23")}
                                id="box23"
                            ></img>
                        </div>
                        
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "743px",
                                left: "50%",
                                marginLeft: "-162px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box24"
                                onClick={() => parent.setImg("box24")}
                                id="box24"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "762px",
                                left: "50%",
                                marginLeft: "-55px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box25"
                                onClick={() => parent.setImg("box25")}
                                id="box25"
                            ></img>
                        </div>
                        <div className="drop-targets" 
                            style={{
                                zIndex: 1,
                                position: "absolute",
                                top: "782px",
                                left: "50%",
                                marginLeft: "59px",
                            }}
                        >
                            <img
                                src="https://imgur.com/hFYHBkY.png"
                                className="box26"
                                onClick={() => parent.setImg("box26")}
                                id="box26"
                            ></img>
                        </div>
                        <div
                            style={{
                                zIndex: 2,
                                position: "absolute",
                                top:"483px",
                                left: "50%",
                                marginLeft: "138px",
                            }}
                        >
                            <img
                                src="https://imgur.com/ci7t7RU.png"
                                width="17px"
                            ></img>
                        </div>
                        <div
                            style={{
                                zIndex: 3,
                                position: "absolute",
                                top:"118px",
                                left: "50%",
                                marginLeft: "-162px",
                            }}
                        >"Your turn, place your piece."
                        </div>
                </center>
                </div>
            </div>
        );
    }
};
/*/
                        <div
                            style={{
                                zIndex: 0,
                                position: "absolute",
                                top:"500px",
                                left: "50%",
                                marginLeft: "-250px",
                            }}
                        >
                            <img
                                src="https://imgur.com/ci7t7RU.png"
                                width="500px"
                            ></img>
                        </div>
/*/
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
