import React, { useEffect, useState, useCallback } from 'react'

const App = ({ count = 0 }) => {
    const [val, setVal] = useState(0)

    const increment = useCallback(() => {
        const val = count + 1
        setVal(val)
    }, [count])

    useEffect(() => {
        increment()
    }, [increment])

    return <div>{val}</div>
}

export default App
