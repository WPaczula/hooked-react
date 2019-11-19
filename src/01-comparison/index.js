import React from 'react'
import ClassCounter from './class-example'
import HookCounter from './hook-example'
import Class from './assets/class.png'
import Hook from './assets/hook.png'
import './style.scss'

const Intro = () => {
    return (
        <div>
            <h1>Porównanko</h1>
            <div className="counters">
                <div>
                    <ClassCounter />
                    <br />
                    <img src={Class} alt="class"/>
                </div>
                <div>
                    <HookCounter />
                    <br />
                    <img src={Hook} alt="hook" />
                </div>
            </div>
        </div>        
    )
}

export default Intro
