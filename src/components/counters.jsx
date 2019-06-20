import React, { Component } from 'react'
import Counter from './counter'
export default class Counters extends Component {
    
    render() {
        return ( 
            <>
                <button onClick={this.props.onReset} className="btn m-2 btn-danger btn-sm">Reset</button>
                {this.props.counters.map(counter => (
                    < Counter
                        counter={counter}
                        onDelete={this.props.onDelete}
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        key={counter.id} />
                ))}
            </>
        )
    }
}