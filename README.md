# Mahde's Tic Tac Toe using React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## The assignment

>We are going to build a tic-tac-toe game with React <br />
I’ve broken down the assignment in two sections. <br />
Section 1 deals with the basics of the game. <br />
Section 2 deals with time travel. <br />

### Section 1

#### Start small and build up the complexity.
>1. Get a board to be displayed on the screen.<br />
2. How are you going to represent the board in code? Matrix?<br />
3. First, turn each square into a X.<br />
4. Represent that “X” into your board.<br />
 - Do not override you state. Create a new state and get a reference to the state. Modify that new state. So section 2 will be possible.<br />
5. Then, take turns to change the square to a O.<br />
6. Represent that “O” to your board.<br />
7. You cannot click on a square if it is occupied<br />
8. Determine if somebody won.<br />

### Section 2

#### Not mutating state directly 
>Immutability makes complex features much easier to implement. Because we 
created a copy of our state we can implement a “time travel” feature that 
allows us to review the tic-tac-toe game’s history and “jump back” to previous
moves. This functionality isn’t specific to games — an ability to undo and redo
certain actions is a common requirement in applications. Avoiding direct data 
mutation lets us keep previous versions of the game’s history intact, and reuse 
them later.
Each time we make a move, store the board data in a state called “history” for
example, that will represent all board states, from the first to the last move. 
And anytime you want reference to a particular move you can fetch it from 
the “history” state.


## Thought proccess

It all began by splitting the game into big components, mainly:

1) Gameboard (contains inside it `GameTiles` and `GameUI`)
2) GameTiles.
3) GameUI (contains inside it `stateSnapshot` buttons).
4) StateSnapshots

### Gameboard

Gameboard contains 9 GameTiles.
Under it there are 2 UI elements which show 'which player is now playing' and possible time travel `StateSnapshots`.

### GameTiles

GameTiles have the ability to inform the Gameboard (the father) component of their content in order to update their representative state inside the Gameboard logic, using function `handleGameTileClick`.

### StateSnapshots

StateSnapshots have the ability to revert the Gameboard (the father) component back to an old `state`, using the state system inside React. This is done using the function `handleTimeTravel`.

