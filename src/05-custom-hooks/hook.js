import React from 'react';

const getSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export const useWindowSize = () => {
    const [windowSize, setSize] = React.useState(getSize)

    const handleResize = React.useCallback(() => setSize(getSize()), [])

    React.useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, [handleResize])

    return windowSize
}

const WindowSize = () => {
    const { width, height } = useWindowSize()
    return (
      <section>
        <h1>{width} x {height}</h1>
      </section>
    )
}

export default WindowSize