import React from "react";

class GameTile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: props.myContent
        }
    }
    handleClick = (e) => {
        if(this.state.content==='') {
            e.target.textContent = this.props.currentPlayer
            this.setState({
                content: this.props.currentPlayer
            })
            this.props.onClickCallback(e.target.id,e.target.textContent)
        }
    }
    componentDidUpdate = (prevProps) => {
        if(this.props.myContent !== prevProps.myContent)
            this.setState({
                content: this.props.myContent
            })
    }
    render() {
        return (
            <div id={this.props.id} className='GameTile' onClick={(e) => this.handleClick(e)}>
                {this.state.content ? (this.state.content==='X' ? 'X' : 'O') : ''}
            </div>
        )
    }
}

export default GameTile;