import React from "react";
import "./cartContainer.css";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import { clearCart } from "../../features/cart/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <div className="cartContainer">
        <div className="cartContainerHeader">
          <h1>your bag</h1>
          <h3>is currently empty</h3>
        </div>
      </div>
    );
  }
  return (
    <div className="cartContainer">
      <div className="cartContainerHeader">
        <h1>your bag</h1>
      </div>
      <div className="cartContainerBody">
        {cartItems.map((item) => (
          <div key={item.id} className="cartContainerLists">
            <CartItem {...item} />
          </div>
        ))}
      </div>
      <div className="cartContainerFooter">
        <hr />
        <h3>
          Total: <span>${total.toFixed(2)}</span>
        </h3>
        <button
          className="cartContainerFooterButton"
          onClick={() => dispatch(clearCart())}
        >
          clear cart
        </button>
      </div>
    </div>
  );
};
export default CartContainer;
