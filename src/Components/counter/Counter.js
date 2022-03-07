import React, { useState } from 'react'
import { Button, Card, Stack } from 'react-bootstrap'
import './Counter.css'

export const Counter = () => {

  const initialState = 0;
  const [counter, setCounter] = useState(initialState);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <Card className="card-counter">
        <Card.Body>
          <Card.Title>Counter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Add or subtract to counter
          </Card.Subtitle>
          <Stack direction="horizontal" gap={3}>
            <Card.Text>
              Value:
            </Card.Text>
            <h3 className="ms-auto">{counter}</h3>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <div>
              <Button variant="primary" onClick={handleAdd}>+1</Button>
            </div>
            <div className="ms-auto">
              <Button variant="danger" onClick={handleSubstract}>-1</Button>
            </div>
          </Stack>
        </Card.Body>
      </Card>
    </>
  )
}