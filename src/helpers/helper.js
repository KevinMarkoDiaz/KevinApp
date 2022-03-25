export const accumulateProducts = (data, prop) => {
  const cantProduct = data.map(d => d[prop]).reduce((a, v) => a + v, 0);
  return cantProduct;
};

export const handleRestTotalPrice = (id, data, setState, state) => {
  const [deleteProduct] = data.filter(item => item.id === id);
  const restTotal = deleteProduct.cant * deleteProduct.price;  
  setState(state - restTotal)
};

export const handleNewStateCart = (id, data, setState) => {
  const newCartValue = data.filter(item => item.id !== id)
  setState(newCartValue);
};

export const handleAddItemState = (id, item, addCant, cart, setTotal, total, setCart, isInCart) =>{
  const totalPrice = item.price * addCant

  if (isInCart(item)) {
    cart.map(product => {
      if (product.id === id) {
        product.cant = product.cant + addCant
      }
    })
  } else {
    item.cant = addCant;
    setCart([...cart, item])
  }
  setTotal(total + totalPrice);
}

export const handleTotalShipping = (cant, shippingPrice)=>{
  if (cant <= 2) {
    return shippingPrice;
  } else if(cant >= 3 && cant <=5) {
    return shippingPrice / 2;
  } else {
    return 0
  }
};

export const handleDiscount = ( cant, total )=>{
  if (cant <= 2) {
    return 0;
  } else if(cant >= 3 && cant <=5) {
    const totalDiscount = (total * 5) / 100 
    return totalDiscount;
  } else {
    const totalDiscount = (total * 10) / 100 
    return totalDiscount;
  }
};

export const handleTotalBill = (priceProducts, priceShipping, discount )=>{

  return (priceProducts + priceShipping) - discount;

};