import React from 'react'
export default function Operators(props) {
  
  return (
    <div className='operators'>

        <button onClick={props.updateCalc('/')}>/</button>
        <button onClick={props.updateCalc('*')}>*</button>
        <button onClick={props.updateCalc('+')}>+</button>
        <button onClick={props.updateCalc("-")}>-</button>

        <button >DEL</button>
        
    </div>
  )
}




