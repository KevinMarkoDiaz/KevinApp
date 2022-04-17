import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { saleAlert } from '../../Alert/Alert';
import { SHIPPING_PRICE } from '../../config/config';
import { context } from '../../Context/ContextProvider';
import { handleDiscount, handleTotalBill, handleTotalShipping } from '../../helpers/helper';
import { handleBuy } from '../../services/services';
import "./Sale.css";

export const Sale = () => {
  const {
    cart,
    total,
    totalUn,
    auth,
    handleClearCart
  } = useContext(context);

  useEffect(async () => {
    await handleBuy(auth, cart, total)
    saleAlert()
  }, [])

  const shipping = handleTotalShipping(totalUn, SHIPPING_PRICE);
  const discount = handleDiscount(totalUn, total);
  const totalBill = handleTotalBill(total, shipping, discount);

  return (

    <div className='sale-container'>
      <div className='cart-container-detail-listb shadow'>
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
              <p>Total: </p> <p>{totalBill}$</p>
            </div>
          </div>
        </div>
      </div>
      <div className='cart-container-detail-listb shadow'>
        <div className='cart-container-detail-list-title'>
          <h6>Lista de productos</h6>
        </div>
        <div className='cart-container-detail-list-bodyb'>
          <div className='cart-container-detail-list-detailsb'>
            {
              cart.map((product, i) => (
                <div className='d-flen' key={i}>
                  <p>{product.title} - </p><p>{product.cant}un</p>
                </div>
              ))
            }
          </div>
          <div className='cart-container-detail-list-title shadow'>
            <h6>Datos de envio</h6>
          </div>
          <div className='cart-container-detail-list-totalb'>
            <div className='d-flen'>
              <p>Nombre </p> <p>{auth?.name}</p>
            </div>
            <div className='d-flen'>
              <p>Telefono </p> <p>{auth?.phoneNumber}</p>
            </div>
            <div className='d-flen'>
              <p>Email</p> <p>{auth?.email}</p>
            </div>
            <div className='d-flen'>
              <p>Direccion de entrega </p> <p>{auth?.address}</p>
            </div>
            <Link to="/">
              <Button
                className='m-2'
                onClick={handleClearCart}
              >Regresar al inicio</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}