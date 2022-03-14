import React from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import { ItemCounter } from '../counter/ItemCounter';
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
  const { title, price, pictureUrl, stock, description } = product;
  return (
    <>
      <Container className='d-flex shadow'>
        <Card className='card-item'>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Precio: {price}$
            </Card.Text>
            <Button variant="success">Comprar</Button>
          </Card.Body>
        </Card>
        <Card className='m-3 detail-container-data'>
          <Card.Header className='d-flex justify-content-between'>
            <h6>{title}</h6>
            <h6>Stock:{stock}</h6>
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item className='detail-container-data-content p-4'>{description}</ListGroup.Item>
          </ListGroup>
          <ItemCounter
            stock={10}
            initial={2}
          />
        </Card>
      </Container>
    </>
  )
};
