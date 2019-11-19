import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        
        this.state = { count: 0 }
    }

    increment = () => {
        const { count } = this.state;

        this.setState({ count: count + 1 })
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <p>{count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}
