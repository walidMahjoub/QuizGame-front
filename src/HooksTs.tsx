import React, { useState, useCallback, useEffect } from 'react'

interface Props {
    count: number
}

const HooksTs = ({ count = 0 }: Props) => {
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

export default HooksTs
