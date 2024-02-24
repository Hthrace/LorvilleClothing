import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsCartActive } from "../../store/cart/cart.selector";
import CrwnLogo from "../../assets/crown.svg";
import { signOutStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.compent";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isActive = useSelector(selectIsCartActive);
  const dispatch = useDispatch();
  const handleSignOut = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <img src={CrwnLogo} alt="" className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={"/shop"}>Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={handleSignOut}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to={"/sign-in"}>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isActive && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
