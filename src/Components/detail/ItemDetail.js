import React, { useContext, useState } from 'react'
import { Button, Card, Container, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { context } from '../../Context/ContextProvider';
import { ItemCounter } from '../counter/ItemCounter';
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {

  const initialState = null;
  const [confirmCant, setConfirmCant] = useState(initialState);

  const { handleAddItem } = useContext(context);

  const onAdd = (cantSelect) => {
    setConfirmCant(cantSelect)
  };

  const { title, price, pictureUrl, stock, description, id } = product;

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
            {
              (confirmCant !== null && confirmCant !== 0)
              && <Link
                to="/cart"
              >
                <Button
                  variant="success"
                  onClick={
                    () => {
                      handleAddItem(id, product, confirmCant)
                    }
                  }
                >
                  Agregar al carrito
                </Button>
              </Link>
            }
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
