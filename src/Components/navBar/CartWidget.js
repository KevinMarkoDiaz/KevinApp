import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { context } from '../../Context/ContextProvider';
import './NavBar.css';

export const CartWidget = () => {

  const { totalUn } = useContext(context)

  return (
    <>
      {
        (totalUn != 0) &&
        <div>
          <AiOutlineShoppingCart className='icon-size' />
          <p className='cart-widget-cant'>{totalUn}</p>
        </div>
      }
    </>
  )
}
