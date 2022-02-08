import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";
import { useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const addItemClickHandler = (item) => dispatch(addItem(item));
  const { name, price, imageUrl } = item;

  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton onClick={addItemClickHandler} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
