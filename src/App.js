import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CheckoutPage from "./pages/checkout/checkout.component";
import { GlobalStyle } from "./global.styles";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/crwn-clothing_redo/' component={HomePage} />
        <Route path='/crwn-clothing_redo/shop' component={ShopPage} />
        <Route
          excact
          path='/crwn-clothing_redo/checkout'
          component={CheckoutPage}
        />
        <Route
          exact
          path='/crwn-clothing_redo/signin'
          render={() =>
            currentUser ? (
              <Redirect to='/crwn-clothing_redo/' />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </Switch>
    </div>
  );
};

export default App;
