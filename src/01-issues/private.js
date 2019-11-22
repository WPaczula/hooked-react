import React from 'react'

const PrivateMethod = () => {
    const imOnlyInComponentsScopeBruh = () => console.log('🐱‍👤') 

    return (
        <button onClick={imOnlyInComponentsScopeBruh}>Cant touch my bebech</button>
    )
}

class NonPrivateMethod extends React.Component {
    imStillPublic = () => console.log('😥')

    render() {
        return (
            <button onClick={this.imStillPublic}>You can use my bebech</button>
        )
    }
}

export { PrivateMethod, NonPrivateMethod }