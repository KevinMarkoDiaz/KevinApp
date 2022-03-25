import { Link } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import './Cart.css'

export const CartdItem = ({ product, handleDeleteItem, handleAddTotalPrice }) => {

  const {
    cant,
    pictureUrl,
    title,
    price,
    id
  } = product;

  return (
    <>
      <div className='card-item-cart shadow m-2'>
        <div className='card-item-image'>
          <img src={pictureUrl} alt="imagen prenda deportiva" />
        </div>
        <div className='card-item-body'>
          <h6 className='card-item-body-title shadow'>{title}</h6>
          <div className='card-item-body-content'>
            <p>Precio: <b>{price}$</b></p>
            <p>Cantidad: <b> {cant}</b></p>
          </div>
          <div className='card-item-body-options'>
            <Link to={`/item/${id}`}>
              <FaInfoCircle className='fz-13' />
            </Link>
            <MdDeleteForever
              className='color-red'
              onClick={() => { handleDeleteItem(id) }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
