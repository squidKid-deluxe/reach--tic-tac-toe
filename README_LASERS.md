# Added lasers for:

## Pay to play Tic-Tac-Toe

#### Winning logic:
 - Double win occurs when a player gets two sets of three-in-a-rows, and that player is awarded full wager.
 - When the game comes to a tie, a player wins their opponent's expenditure and loses their own.
 - In the 3D version, we discovered that it was impossible for a player to win if their opponent played the center of the cube, so that move was said to be 'illegal'.

#### Eye candy and user-friendliness:
 - Player clicks on the chosen spot to move there.
 - Both board and pieces are images and have 3D-like perspective planes.
 - Images, rather than plain colors, are used as much as possible.
 - User-friendly terminology is used for deployer and attacher labeling.
 - The front right leg of the web-based 3D game was placed in front of the pieces.

#### Game modes:
 - Two different game modes are available on the web version of the game, these being: Standard, and 3D.
 - Three different game modes are also available on the CLI version: Simulation mode, Live mode, and 3D. Live mode.

#### What we would do if given the chance:
 - The simplest thing that we would like to add to the game is a 'play again' button to allow the players to play again.
 - Implement python nescient server with a JS client for chatting and contract info transfer.
 - Add a 'FOMO' game mode, eg. play until one player is three wins ahead of the other, and wins the total pot of all games.
 - Add 'Best of three' game mode, where players commit to 3 games and the winner gets the total pot of all three.
 
#### What I would change about Reach as a language:
 - Allow `for` and `while` loops in regular steps so that programmers where not bound to use `Array.iota().map()` for looping.
 - We continually ran into `Stack too deep` compiler errors from `Array.iota().map()` when constructing a 3x3x3 array. This happened whether we used triple stacked `Array.iota(3).map()` or flat `Array.iota(27).map()` statements.
 - The error messages were not very helpful, improved stack trace on the Reach end would expedite development.  
 - Allowing `var` in regular steps would improve the ability to develop more exotic logic and mathematical statements. 
