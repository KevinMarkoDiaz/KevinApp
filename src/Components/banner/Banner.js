import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../static/img1.jpg'
import img2 from '../../static/img2.jpg'
import img3 from '../../static/img3.jpg'

export const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
