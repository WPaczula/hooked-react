import React from 'react'

const PrivateMethod = () => {
    const imOnlyInComponentsScopeBruh = () => console.log('🐱‍👤') 

    return (
        <button onClick={imOnlyInComponentsScopeBruh}>Cant touch my bebech</button>
    )
}

export default PrivateMethod