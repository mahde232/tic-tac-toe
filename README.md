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

>We are going to build a tic-tac-toe game with React
I’ve broken down the assignment in two sections.
Section 1 deals with the basics of the game.
Section 2 deals with time travel.

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

