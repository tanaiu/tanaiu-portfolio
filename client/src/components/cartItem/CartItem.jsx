import React from "react";
import "./cartItem.css";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={img} alt="" />
      <div className="cartItemLists">
        <h3>{title}</h3>
        <h3 className="cartItemPrice">${price}</h3>
        <button
          className="cartItemRemoveButton"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </button>
      </div>
      <div className="cartItemIcon">
        <button
          className="cartItemIconButton"
          onClick={() => dispatch(increase({ id }))}
        >
          <KeyboardArrowUp />
        </button>
        <p className="cartItemAmount">{amount}</p>
        <button
          className="cartItemIconButton"
          onClick={() => {
            dispatch(decrease({ id }));
            if (amount === 1) return dispatch(removeItem(id));
          }}
        >
          <KeyboardArrowDown />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
