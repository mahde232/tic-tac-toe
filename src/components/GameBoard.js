import React from 'react';
import GameTile from './GameTile';
import './style.css'
import StateSnapshot from './StateSnapshot';

class GameBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            historyOfStates: [this.state],
            currentPlayer: 'X',
            gameTile1: '',
            gameTile2: '',
            gameTile3: '',
            gameTile4: '',
            gameTile5: '',
            gameTile6: '',
            gameTile7: '',
            gameTile8: '',
            gameTile9: '',
            winner: null
        }
    }
    checkForWinner = () => {
        //rows
        if(this.state.gameTile1 === this.state.gameTile2 && this.state.gameTile1 === this.state.gameTile3) //[0,1,2]
            return this.state.gameTile1
        if(this.state.gameTile4 === this.state.gameTile5 && this.state.gameTile4 === this.state.gameTile6) //[3,4,5]
            return this.state.gameTile4
        if(this.state.gameTile7 === this.state.gameTile8 && this.state.gameTile7 === this.state.gameTile9) //[6,7,8]
            return this.state.gameTile7
        //columns
        if(this.state.gameTile1 === this.state.gameTile4 && this.state.gameTile1 === this.state.gameTile7) //[0,3,6]
            return this.state.gameTile1
        if(this.state.gameTile2 === this.state.gameTile5 && this.state.gameTile2 === this.state.gameTile8) //[1,4,7]
            return this.state.gameTile2
        if(this.state.gameTile3 === this.state.gameTile6 && this.state.gameTile3 === this.state.gameTile9) //[2,5,8]
            return this.state.gameTile3
        //diagonals
        if(this.state.gameTile1 === this.state.gameTile5 && this.state.gameTile1 === this.state.gameTile9) //[0,4,8]
            return this.state.gameTile1
        if(this.state.gameTile3 === this.state.gameTile5 && this.state.gameTile3 === this.state.gameTile7) //[2,4,6]
            return this.state.gameTile3
        //no wins
        if(this.state.historyOfStates.length === 10)
            return 'DRAW';
        return null;
    }
    handleGameTileClick = (gameTileID, content) => {
        if(this.state[gameTileID] === '' && !this.state.winner) {
            this.setState({
                currentPlayer: this.state.currentPlayer === 'X' ? 'O' : 'X',
                [gameTileID]: content,
                historyOfStates: [...this.state.historyOfStates,this.state],
            })
        }
    }
    handleTimeTravel = (whichState) => {
        this.setState(this.state.historyOfStates[whichState])
    }
    componentDidUpdate = (_,prevState) => {
        if(!prevState.winner)
        {
            const possibleWinner = this.checkForWinner();
            if(possibleWinner)
                this.setState({
                    winner: possibleWinner
                })
        }
    }
    render() {
        if(this.state.winner) {
            return (
                <div id='endScreen'>
                    <div className='title'>{this.state.winner==='DRAW' ? 'DRAW! No winner' : (`${this.state.winner} won!`)}</div>
                    <button className='stateSnapshot' onClick={()=>{window.location.reload()}}>Play Again</button>
                </div>
            )}
        return (
            <div id='GameScreen'>
                <div id='GameBoard'>
                    <GameTile id='gameTile1' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile1}/>
                    <GameTile id='gameTile2' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile2}/>
                    <GameTile id='gameTile3' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile3}/>
                    <GameTile id='gameTile4' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile4}/>
                    <GameTile id='gameTile5' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile5}/>
                    <GameTile id='gameTile6' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile6}/>
                    <GameTile id='gameTile7' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile7}/>
                    <GameTile id='gameTile8' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile8}/>
                    <GameTile id='gameTile9' onClickCallback={this.handleGameTileClick} currentPlayer={this.state.currentPlayer} myContent={this.state.gameTile9}/>
                </div>
                <div id='GameUI'>
                    <div className='currentPlayer title'>
                        Current Player:<br/> Player-{this.state.currentPlayer}
                    </div>
                    <div id='timeTravel'>
                        <span className='title'>Time Travel:</span>
                        {this.state.historyOfStates.map((_,idx) => {
                            if(idx===0) //skip first state
                                return ''
                            else return <StateSnapshot key={idx} id={idx} onClickCallback={this.handleTimeTravel} />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default GameBoard;