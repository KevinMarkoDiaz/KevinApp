import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { context } from '../../Context/ContextProvider';
import './NavBar.css';

export const CartWidget = () => {

  const { totalUn } = useContext(context)

  return (
    <>
      {
        (totalUn != 0) &&
        <div className='d-flex'>
        <Link to='/cart' >
          <AiOutlineShoppingCart className='icon-size' />
        </Link>
          <p className='cart-widget-cant'>{totalUn}</p>
        </div>
      }
    </>
  )
}