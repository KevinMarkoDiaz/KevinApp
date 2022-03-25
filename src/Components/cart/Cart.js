import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { context } from '../../Context/ContextProvider';
import { CartdItem } from './CartdItem';
import { accumulateProducts, handleDiscount, handleTotalBill, handleTotalShipping } from '../../helpers/helper';
import { SHIPPING_PRICE, DISCOUNT_MESSAGE } from '../../config/config';
import {ModalComponent} from '../modal/ModalComponent'
import './Cart.css';

export const Cart = () => {

  const {
    cart,
    handleClearCart,
    handleDeleteItem,
    total
  } = useContext(context);
  
  const cantProduct = accumulateProducts(cart, "cant")
  const shipping = handleTotalShipping(cantProduct, SHIPPING_PRICE);
  const discount = handleDiscount(cantProduct, total);
  const totalBill = handleTotalBill(total, shipping, discount);

  return (
    <div className='p-3 cart-container '>
      <div className='cart-container-product-list '>
        {
          cart.map(product => <CartdItem
            key={product.id}
            product={product}
            handleDeleteItem={handleDeleteItem}
          />)
        }
      </div>

      
      <div className='cart-container-detail-list shadow'>
        <div className='cart-container-detail-list-title shadow'>
          <h6>Resumen de compra</h6>
        </div>
        <div className='cart-container-detail-list-body'>
          <div className='cart-container-detail-list-details'>
            <div className='d-flex justify-content-between'>
              <p>Cantidad de productos: </p> <p>{cantProduct}un</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Precio de productos: </p> <p>{total}$</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Envio: </p> <p>{ shipping}$</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Descuento: </p> <p>{discount}$</p>
            </div>
          </div>
          <div className='cart-container-detail-list-total'>
            <div className='d-flex justify-content-between'>
              <p>Total: </p><p>{ totalBill}$</p>
            </div>
          </div>
        </div>
        <Button
          variant="danger"
          onClick={handleClearCart}
        >
          Borrar todos los productos
        </Button>
        <div  className='cart-container-detail-side-info'>
          <div>
            <ModalComponent/>
          <p>{DISCOUNT_MESSAGE}</p>
          </div>

        </div>
      </div>
    </div>
  )
}
