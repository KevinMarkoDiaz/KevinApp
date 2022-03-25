import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { context } from '../../Context/ContextProvider';
import { CartdItem } from './CartdItem';
import { handleDiscount, handleTotalBill, handleTotalShipping } from '../../helpers/helper';
import { SHIPPING_PRICE, DISCOUNT_MESSAGE, SHIPPING_MESSAGE } from '../../config/config';
import { ModalComponent } from '../modal/ModalComponent'
import { FcAddRow } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './Cart.css';

export const Cart = () => {

  const {
    cart,
    handleClearCart,
    handleDeleteItem,
    total,
    totalUn
  } = useContext(context);

  const shipping = handleTotalShipping(totalUn, SHIPPING_PRICE);
  const discount = handleDiscount(totalUn, total);
  const totalBill = handleTotalBill(total, shipping, discount);
  console.log(cart.length)
  return (
    <div className='p-3 cart-container '>
      <div className='cart-container-product-list '>
        {
          (cart.length !== 0)
            ? cart.map(product => <CartdItem
              key={product.id}
              product={product}
              handleDeleteItem={handleDeleteItem}
            />)
            :
            <div>
              <h4> Sin productos agregados
                <FcAddRow className='h1' />
              </h4>
              <Link to='/'>
                <Button>
                  Ir al al menu
                </Button>
              </Link>
            </div>
        }
      </div>
      <div className='cart-container-detail-list shadow'>
        <div className='cart-container-detail-list-title shadow'>
          <h6>Resumen de compra</h6>
        </div>
        <div className='cart-container-detail-list-body'>
          <div className='cart-container-detail-list-details'>
            <div className='d-flex justify-content-between'>
              <p>Cantidad de productos: </p> <p>{totalUn}un</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Precio de productos: </p> <p>{total}$</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Envio: </p> <p>{shipping}$</p>
            </div>
            <div className='d-flex justify-content-between'>
              <p>Descuento: </p> <p>{discount}$</p>
            </div>
          </div>
          <div className='cart-container-detail-list-total'>
            <div className='d-flex justify-content-between'>
              <p>Total: </p><p>{totalBill}$</p>
            </div>
          </div>
        </div>
        <Button
          variant="danger"
          onClick={handleClearCart}
        >
          Borrar todos los productos
        </Button>
        <div className='cart-container-detail-side-info'>
          <div className='d-flex justify-content-between'>
            <ModalComponent
              title='Descuento'
              message={DISCOUNT_MESSAGE}
            />
            <ModalComponent
              title='Envio'
              message={SHIPPING_MESSAGE}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
