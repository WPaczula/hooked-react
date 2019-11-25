/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'

const Button = 
    ({ buttonData, onClick }) => console.log('render') ||
        <button onClick={onClick}>{buttonData.name}</button>

const BiscuitGame = () => {
    const [score, setScore] = React.useState(0)

    const handleClick = () => setScore(score => score+1)
    const buttonData = ({ name: '🍪' })

    return <div className="biscuit-game">
        {score}
        <Button onClick={handleClick} buttonData={buttonData} />  
    </div>
}

export default BiscuitGame