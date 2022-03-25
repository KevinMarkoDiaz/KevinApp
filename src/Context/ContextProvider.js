import { createContext, useState } from 'react'
import { handleAddItemState, handleNewStateCart, handleRestTotal } from '../helpers/helper';

export const context = createContext();
const { Provider } = context;

export const ContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  const [totalUn, setTotalUn] = useState(0) 
  
  const handleDeleteItem = (id) => {
    handleNewStateCart(
      id, 
      cart, 
      setCart
      );
    handleRestTotal(
      id, 
      cart, 
      setTotal, 
      total,
      setTotalUn, 
      totalUn
      );
  };

  const handleAddItem = (id, item, addCant, ) => {
    handleAddItemState(
      id, 
      item, 
      addCant, 
      cart, 
      setTotal, 
      total, 
      setCart, 
      isInCart, 
      setTotalUn,
      totalUn     
      );
  };

  const handleClearCart = () => {
    setCart([]);
    setTotalUn(0)
    setTotal(0)
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
    handleClearCart: handleClearCart,
    totalUn: totalUn
  };

  return (
    <Provider value={ContextValue}>
      {children}
    </Provider>
  )
};
