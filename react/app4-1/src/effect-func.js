import React from 'react'

export default function EffectFunc() {
    let [a, setA] = React.useState(10)
    let [b, setB] = React.useState(20)

    React.useEffect(function() {
        alert('a = ' + a + ', b = ' + b)
    }, [a, b])

    return (
        <div>
            <button onClick={() => setA(a + 1)}>Change A</button><br/>
            <button onClick={() => setB(b + 1)}>Change B</button>
        </div>
    )
        
}