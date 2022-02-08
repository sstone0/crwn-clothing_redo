import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItemClickHandler = (item) => dispatch(clearItemFromCart(item));
  const addItemClickHandler = (item) => dispatch(addItem(item));
  const removeItemClickHandler = (item) => dispatch(removeItem(item));

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={removeItemClickHandler}>
          &#10094;
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={addItemClickHandler}>
          &#10095;
        </span>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearItemClickHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
