import React from 'react'

export default function ItemListContainer(props) {
    console.log(props.children)
  return (
    <div className='caja'>
        <button onClick={props.onClick} className='btn'>
          {props.children}  
        </button>
        </div>
  )
}
