import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/crwn-clothing_redo/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/crwn-clothing_redo/shop">SHOP</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/crwn-clothing_redo/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
