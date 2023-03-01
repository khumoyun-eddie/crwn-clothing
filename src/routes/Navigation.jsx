import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import CartDropDown from "../components/CartDropDown/CartDropDown";
import CartIcon from "../components/CartIcon/CartIcon";
import { CartContext } from "../contexts/cartContext";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../utils/firebase/firebase.utils";
import "./Navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)

  const signOutHandler=async()=>{
   await signOutUser()
  }

  return (
    <>
      <div className='navigation'>
        <Link
          className='navigation__logo'
          to='/'
        >
          <CrwnLogo />
        </Link>
        <div className='navigation__links'>
          <Link
            className='navigation__link'
            to='/shop'
          >
            Shop
          </Link>
          <Link
            className='navigation__link'
            to='/contact'
          >
            Contact
          </Link>
          {currentUser ? (
            <span
              className='navigation__link'
             s
              >
              Sign Out
            </span>
          ) : (
            <Link
              className='navigation__link'
              to='/auth' >
              Sign In
            </Link>
          )}
          <CartIcon/>
        </div>
        {isCartOpen &&  <CartDropDown />}
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
