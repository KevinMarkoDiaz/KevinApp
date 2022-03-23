import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <>
      <Card className='card-item shadow'>
        <Card.Img variant="top" src={pictureUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Precio: {price}$
          </Card.Text>
          <Link to={`/item/${id}`}>
          <Button variant="primary">
            Detalles
          </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
};
