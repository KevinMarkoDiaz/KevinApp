import React from 'react'
import { Spinner } from 'react-bootstrap'
import './Loader.css';

export const Loader = () => {
  return (
    <div className='loader-center'>
      <Spinner animation="border" variant="info" />
    </div>
  )
}
