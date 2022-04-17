import React, { useState } from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import './ItemCounter.css'

export const ItemCounter = ({ stock, initial, onAdd }) => {

  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const handleAdd = () => {
    (stock > initial && counter < stock) && setCounter(counter + initial || 1);
  };

  const handleSubstract = () => {
    (counter > 1) && setCounter(counter - initial || 1);
  };

  const handleConfirm = () => {
    onAdd(counter)
  };

  return (
    <>
      <Card className="card-counter shadow " border="light">
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Card.Text className='h4'>
              Cantidad:
            </Card.Text>
            <h3 className="ms-auto">{counter}</h3>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div>
              <Button
                variant="light"
                onClick={handleAdd}
              >
                +{initial || 1}
              </Button>
            </div>
            <div className="ms-auto">
              <Button
                variant="light"
                onClick={handleSubstract}
              >
                -{initial || 1}
              </Button>
            </div>
          </Stack>
          <div className='pt-3'>
            <Button
              variant="success"
              onClick={handleConfirm}
            >
              Confirmar
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}