import React from 'react'

export default function Digits(porps) {
    
    const createDigits = () =>{
        const digits =[];

        for(let i =1;i<10;i++){
            digits.push(
                <button onClick={i.toString()}key={i}>
                    {i}
                </button>
            )
        }
        return digits
    }

    return (
        <div className='digits'>
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
        </div>
    )
}


/** */

