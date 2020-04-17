import React from 'react'

class NonPrivateMethod extends React.Component {
    imStillPublic = () => console.log('😥')

    render() {
        return (
            <button onClick={this.imStillPublic}>You can use my bebech</button>
        )
    }
}

export default NonPrivateMethod