import React from 'react'

export default function Display(props) {
  return (
    <div  className='display'>
      {props.result ? <span>(0)</span> : ""}
      { props.calc|| 0}
    </div>
  )
}



