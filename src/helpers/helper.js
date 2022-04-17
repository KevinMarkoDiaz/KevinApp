export const handleRestTotal = (id, data, setState, state, setTotalUn, totalUn) => {
  const [deleteProduct] = data.filter(item => item.id === id);
  const restTotal = deleteProduct.cant * deleteProduct.price;
  setState(state - restTotal)
  setTotalUn(totalUn - deleteProduct.cant)
};

export const handleNewStateCart = (id, data, setState) => {
  const newCartValue = data.filter(item => item.id !== id)
  setState(newCartValue);
};

export const handleAddItemState = (id, item, addCant, cart, setTotal, total, setCart, isInCart, setTotalUn, totalUn) => {
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
  setTotalUn(totalUn + addCant);
}

export const handleTotalShipping = (cant, shippingPrice) => {
  if (cant <= 2) {
    return shippingPrice;
  } else if (cant >= 3 && cant <= 5) {
    return shippingPrice / 2;
  } else {
    return 0
  }
};

export const handleDiscount = (cant, total) => {
  if (cant <= 2) {
    return 0;
  } else if (cant >= 3 && cant <= 5) {
    const totalDiscount = (total * 5) / 100
    return totalDiscount;
  } else {
    const totalDiscount = (total * 10) / 100
    return totalDiscount;
  }
};

export const handleTotalBill = (priceProducts, priceShipping, discount) => {
  return (priceProducts + priceShipping) - discount;
};
