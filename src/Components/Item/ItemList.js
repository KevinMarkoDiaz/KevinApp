import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Item } from './Item'
import './ItemList.css'

export const ItemList = ({ catalog }) => {

  return (
    <>
      <Container>
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
    </>
  )
};