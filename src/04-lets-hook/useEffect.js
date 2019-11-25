import React from 'react'
import './styles.scss'

const Timer = () => {
    const [seconds, setSeconds] = React.useState(0)
    const [on, setOn] = React.useState(false)

    // synchronizuj stan 
    React.useEffect(() => {
        if (on) {
            const interval = setInterval(() => setSeconds(seconds + 1), 1000)
            
            // czyść side effecty
            return () => {
                clearInterval(interval)
            };
        }
    // synchronizuj gdy zmienią się wartości
    }, [on, seconds])

    return (
    <section>
        Timer ⏱
        <div className="timer">{seconds}</div>
        <button onClick={() => setOn(!on)}>{on ? 'Off' : 'On'}</button>
    </section>
    )
}

export default Timer
