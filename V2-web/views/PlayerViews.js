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
        const { won } = this.props;
        return (
            <div>
              <h1>{!won ? "YOU WIN!" : "YOU LOSE!"}</h1>
            </div>
        );
    }
};

////////////////////////////////////////////////////////
// Get hand function for waiting fo the other player. //
////////////////////////////////////////////////////////

exports.GetHandb = class extends React.Component {
    render() {
        const {parent} = this.props;
        return (
<div class="container">
Waiting for the other player...
        <center><img src="https://imgur.com/CsxXjde.png" width="900px" height="720px" style={{zIndex:0, position:"absolute", top:"0px", left:"50%", marginLeft:"-450px"}}></img></center>
        <center><img src="https://imgur.com/Hla2Ybx.png" width="900px" height="720px" style={{zIndex:1, position:"absolute", top:"0px", left:"50%", marginLeft:"-450px"}}></img></center>
        <center><div style={{zIndex:2, position:"absolute", top:"145px", left:"50%",  marginLeft:"-800px"}}>
           
            <div class="drop-targets">
                <pre>                                     </pre>
                <img class="box7" id="box7"></img>
                <pre>             </pre><img class="box8" id="box8"></img>
                <pre>             </pre><img class="box9" id="box9"></img>
                <pre></pre>
            </div>
            <div class="drop-targets">
                <pre>                            </pre>
                <img class="box4" id="box4"></img>
                <pre>         </pre><img class="box5" id="box5"></img>
                <pre>         </pre><img class="box6" id="box6"></img>
                <pre></pre>
            </div>
            <div class="drop-targets">
                <pre>                 </pre>
                <img class="box1" id="box1"></img>
                <pre>      </pre><img class="box2" id="box2"></img>
                <pre>      </pre><img class="box3" id="box3"></img>
                <pre></pre>
            </div>
            
        </div></center>
        
    </div>
        );
    }
};

//////////////////////////////
// Get the move of a player //
//////////////////////////////

exports.GetHand = class extends React.Component {
    render() {
        const {parent} = this.props;
        return (
        <div class="container">
        <center><img src="https://imgur.com/CsxXjde.png" width="900px" height="720px" style={{zIndex:0, position:"absolute", top:"300px", left:"50%", marginLeft:"-450px"}}></img></center>
        <center><img src="https://imgur.com/Hla2Ybx.png" width="900px" height="720px" style={{zIndex:1, position:"absolute", top:"300px", left:"50%", marginLeft:"-450px"}}></img></center>
        <center><div style={{zIndex:2, position:"absolute", top:"445px", left:"50%",  marginLeft:"-500px"}}>
           
            <div class="drop-targets">
                <pre>                                     </pre>
                <img class="box7" onclick={() => parent.setimg('box7')} id="box7"></img>
                <pre>             </pre><img class="box8" onclick={() => parent.setimg('box8')} id="box8"></img>
                <pre>             </pre><img class="box9" onclick={() => parent.setimg('box9')} id="box9"></img>
                <pre></pre>
            </div>
            <div class="drop-targets">
                <pre>                            </pre>
                <img class="box4" onclick={() => parent.setimg('box4')} id="box4"></img>
                <pre>         </pre><img class="box5" onclick={() => parent.setimg('box5')} id="box5"></img>
                <pre>         </pre><img class="box6" onclick={() => parent.setimg('box6')} id="box6"></img>
                <pre></pre>
            </div>
            <div class="drop-targets">
                <pre>                 </pre>
                <img class="box1" onclick={() => parent.setimg('box1')} id="box1"></img>
                <pre>      </pre><img class="box2" onclick={() => parent.setimg('box2')} id="box2"></img>
                <pre>      </pre><img class="box3" onclick={() => parent.setimg('box3')} id="box3"></img>
                <pre></pre>
            </div>
            
        </div></center>
        
    </div>
        );
    }
};

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
