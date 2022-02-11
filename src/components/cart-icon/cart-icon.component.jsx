import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./cart-icon.styles.jsx";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <CartContainer onClick={toggleCartHiddenClickHandler}>
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

export default CartIcon;
