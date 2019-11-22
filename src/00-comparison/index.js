import React from 'react'
import ClassCounter from './class-example'
import HookCounter from './hook-example'
import Class from './assets/class.png'
import Hook from './assets/hook.png'
import './style.scss'

const Intro = () => {
    const [leftVisible, setLeftVisible] = React.useState(undefined)

    return (
        <>
            <section>
                <h2>Czym są hooki? 🤔</h2>
                <section>
                    <p>👉 Mechanizm, ktry pozwala na wprowadzenie stanu oraz jego synchronizacji w komponentach funkcyjnych</p>
                    <p>👉 100% kompatybilności wstecznej</p>
                    <p>👉 Zawiera jeden ważny feature, na który wcześniej trzeba było wykonywać obejścia</p>
                </section>
            </section>
            <section>
                <h1>Porównanko</h1>
            </section>
            <section>
                <h2>Implementacja</h2>
                <div className="divide">
                    <div>
                        <ClassCounter />
                        <br />
                        <img src={Class} />
                    </div>
                    <div>
                        <HookCounter />
                        <br />
                        <img src={Hook} />
                    </div>
                </div>
            </section>        
            <section>
                <h2>Bundle</h2>
                {leftVisible === true && <iframe className="frame" src="https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDGMA0cDecDCE4EAdkifAL5wBmURcA5FKhowFDtIAekscAEyQ0UAVwA28NOJQBnWQQiiKSKHB4xyAhYWJkKudnGNw0pWTCiiM0ABRh6YWQEpDJ93Fmiwq-45dGHsaBQTAAFsCyAHQWKJpwALy4pkoUAFxwAAxwlCE5nO7AJGgsIOTwSbauCQB8bkEpJBbJZspUiXDhkTEwcUgA3AUNXdGySDAAyr2atnit6SltcADUcACMOc55uXksJEJQVfVBZk3wc6ntSSM9fYN57iwwolAkcLYPDQA8AsAAbjVPg0TF8wDUcPMYJQvgB6MFA4FwL4AI1EMBgpDgpHw4mAaAA1gkcDciiUkGUKJQagBJYqlcqw1Ho0iAxEgmG_AEIrbuXK5IA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.3&externalPlugins=" />}
                {leftVisible === false && <iframe className="frame" src="https://babeljs.io/en/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wChS0IA7AZ3gGEIBXKmJKOAXjgAoBKLgD44Ab1JwJcSrXgBtSixgAaODSQxGigLpdExGADomagMowUbHgAY-5SVOp04wKmiIgkrXfyGr1m1h4FLwBqOABGW3FJIhgmKCpeaPsJAB4AE2AAN0FklPtUsEERYJgAX1SAeiK8_LSAIyYYGGo4anoAG2A0AGtOERc3JA9WMsEASVd3TxgqxubqXLq4KsycvNsy8iQAD0hYOHSkTBQmDoZmVnY4IA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.7.3&externalPlugins=" />}
                <button onClick={() => setLeftVisible(!leftVisible)}>{`Pokaż ${leftVisible ? 'hook' : 'klasę'}`}</button>
            </section>
        </>
    )
}

export default Intro
