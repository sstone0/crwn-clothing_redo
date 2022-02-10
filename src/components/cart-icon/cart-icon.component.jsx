import React from 'react';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartIcon = () => {
	const dispatch = useDispatch();
	const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());
	const itemCount = useSelector(selectCartItemsCount);

	return (
		<div className="cart-icon" onClick={toggleCartHiddenClickHandler}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

export default CartIcon;
