import React, { useContext } from 'react';
import { quantityContainer } from './style';
import PDPContext from '../../context/index';

const Quantity = () => {
  const { quantity, updateQuantity } = useContext(PDPContext);

  const updateQty = (increment) => {
    let tempQty = quantity;
    if (increment) tempQty += 1;
    else tempQty -= 1;
    if (tempQty <= 1) return updateQuantity(1);
    return updateQuantity(tempQty);
  };

  return (
    <div className={quantityContainer}>
      <button onClick={() => updateQty(false)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => updateQty(true)}>+</button>
    </div>
  );
};

export default Quantity;
