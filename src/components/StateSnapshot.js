import React, { Component } from 'react'

export class StateSnapshot extends Component {
    render() {
        return (
            <div className='stateSnapshot' onClick={() => {this.props.onClickCallback(this.props.id)}}>
                Step number {this.props.id}
            </div>
        )
    }
}

export default StateSnapshot
