import React, { useState } from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ItemCounter } from '../counter/ItemCounter';
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {

  const initialState = null;
  const [confirmCant, setConfirmCant] = useState(initialState);

  const onAdd = (cantSelect) => {
    setConfirmCant(cantSelect)
  };

  const { title, price, pictureUrl, stock, description } = product;

  return (
    <>
      <Container className='d-flex shadow min-height'>
        <Card className='card-item'>
          <Card.Img variant="top" src={pictureUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Precio: {price}$
            </Card.Text>
            <Link
              to="/cart"
            >
              <Button variant="success">Comprar</Button>
            </Link>
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
          {
            (confirmCant === null || confirmCant === 0) && <ItemCounter stock={5} initial={1} onAdd={onAdd} />
          }
        </Card>
      </Container>
    </>
  )
};
