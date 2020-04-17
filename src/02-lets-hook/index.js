/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import UseState from './useState'
import UseEffect from './useEffect'
import UseCallbackuseMemo from './useCallbackuseMemo'
import UseContext from './useContext'

const Hooks = () => {
    return (
        <>
            <section>
                <h1>No to jakie są te hooki? 💁‍</h1>
            </section>
            <section>
                <h2>useState</h2>
                <UseState />
            </section>
            <section>
                <h2>useEffect</h2>
                <UseEffect />
            </section>
            <section>
                <h2>useContext</h2>
                <UseContext />
            </section>
            <section>
                <h2>useCallback i useMemo</h2>
                <UseCallbackuseMemo />
            </section>
        </>
    )
}

export default Hooks
