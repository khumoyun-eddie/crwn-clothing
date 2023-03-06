import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartDropDown from "../../components/CartDropDown/CartDropDown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { CartContext } from "../../contexts/cartContext";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./Navigation.styles.scss";
import { LogoContainer, NavigationContainer, NavLink, NavLinks } from "./Navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          {currentUser ? (
            <span className='navigation__link' onClick={signOutHandler} >
              Sign Out
            </span>
          ) : (
            <NavLink to='/auth'>Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>

      <Outlet />
    </>
  );
};
export default Navigation;
