import React, { useState } from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import './ItemCounter.css'

export const ItemCounter = ({itemName, stock, initial}) => {

  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const handleAdd = () => {
    (stock > initial && counter < stock ) && setCounter(counter + initial || 1);
  };

  const handleSubstract = () => {
    (counter > 1 ) && setCounter(counter - initial || 1);    
  };

  return (
    <>
      <Card className="card-counter">
        <Card.Body>
          <Card.Title>{itemName || "Item"}</Card.Title>          
          <Stack direction="horizontal" gap={3}>
            <Card.Text>
              Value:
            </Card.Text>
            <h3 className="ms-auto">{counter}</h3>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div>
              <Button variant="primary" onClick={handleAdd}>+{initial || 1}</Button>
            </div>
            <div className="ms-auto">
              <Button variant="danger" onClick={handleSubstract}>-{initial || 1}</Button>
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </>
  )
}