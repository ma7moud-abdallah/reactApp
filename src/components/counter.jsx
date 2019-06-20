import React, { Component } from 'react'

export default class Counter extends Component {
    
    render() {
        return (
            <div>
                <span className={this.getBdgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
                <button  disabled = {this.props.counter.value < 1} onClick={() => this.props.onDecrement(this.props.counter)} className="btn m-2 btn-secondary btn-sm">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn m-2 btn-danger btn-sm">x</button>
            </div>
        )
    }
    getBdgeClasses() {
        let classes = "badge m-2 badge-"
        classes += (this.props.counter.value === 0) ? "warning" : "primary"
        return classes
    }

    formatCount() {
        const { value } = this.props.counter
        return value === 0 ? 'zero' : value
    }
}
