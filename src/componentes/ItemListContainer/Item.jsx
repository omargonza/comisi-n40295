import React from 'react'
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Item(props) {

const{ imgUrl,title,price,description}=props
let urlDetail = `/item/${props.id}`;


  return (
     <Link to={urlDetail}>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src= {props.img} alt="imagen del producto" />
      <Card.Body>
        <Card.Title> {props.Title } </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="secondary" size="lg">
        Ir al Detalle
      </Button>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Item  