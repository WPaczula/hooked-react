/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'

export default class LosingContext extends Component {
    setImportantThing() {
        const { important } = this.props

        this.setState({ importantStaff: important })
    }

    render() {
        return (
            <button onClick={this.setImportantThing}>
                🔥🔥🔥
            </button>
        )
    }
}
