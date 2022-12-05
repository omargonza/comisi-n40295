import React from 'react'

function Item(props) {

const{ imgUrl,title,price,description}=props
  return (
    <div className='contenedor'>
    <div className='card'>
      <div className='card-img'>
        <img src={imgUrl} alt="imagen del preoducto"></img> 
        <button onClick={props.onClick} className='btn'>
          {props.children}  
          
        </button>
      </div>
      <div className='card-detail'>
        <h3>{title} </h3>
        <h5>{price} </h5>
        <p> {description} </p>
      </div>
    </div>
    </div>
  )
}

export default Item  