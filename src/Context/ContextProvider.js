import { createContext, useState } from 'react'
import { handleAddItemState, handleNewStateCart, handleRestTotalPrice } from '../helpers/helper';

export const context = createContext();
const { Provider } = context;

export const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)

  const handleDeleteItem = (id) => {
    handleNewStateCart(
      id, 
      cart, 
      setCart
      );
    handleRestTotalPrice(
      id, 
      cart, 
      setTotal, 
      total
      );
  };

  const handleAddItem = (id, item, addCant) => {
    handleAddItemState(
      id, 
      item, 
      addCant, 
      cart, 
      setTotal, 
      total, 
      setCart, 
      isInCart 
      );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    const isInCartValue = cart.includes(item);
    return isInCartValue;
  }


  const ContextValue = {
    cart: cart,
    total: total,
    handleAddItem: handleAddItem,
    handleDeleteItem: handleDeleteItem,
    handleClearCart: handleClearCart
  };

  return (
    <Provider value={ContextValue}>
      {children}
    </Provider>
  )
};
