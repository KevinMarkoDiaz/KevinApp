import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { storeInventoryPromise } from '../../Mock/Mock'
import { Loader } from '../Spinner/Loader'
import { Item } from './Item'
import './ItemList.css'

export const ItemList = () => {

  useEffect(() => {
    res();
  }, [])

  const initialState = null;
  const [catalog, setCatalog] = useState(initialState);
  const [load, setLoad] = useState(true);

  const handleStates = (data) => {
    setCatalog(data)
    setLoad(false);
  }

  const res = async () => {
    try {
      const data = await storeInventoryPromise;
      handleStates(data);
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
    {
      load
        ? <Loader/>
        : <Container>
        <Row>
          {catalog.map((item, index) => {
            return (
              <Col className="content-center" key={index}>
                <Item                  
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  pictureUrl={item.pictureUrl}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    } 
    </>
  )
}
/*

    

*/