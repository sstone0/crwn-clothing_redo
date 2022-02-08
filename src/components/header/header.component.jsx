import React from "react";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import "./header.styles.scss";

const Header = () => {
  const dispatch = useDispatch();
  const signOutStartClickHandler = () => dispatch(signOutStart());
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <HeaderContainer>
      <LogoContainer to='/crwn-clothing_redo/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/crwn-clothing_redo/shop'>SHOP</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStartClickHandler}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/crwn-clothing_redo/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
