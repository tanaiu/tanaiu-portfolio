import React, { useEffect } from "react";
import "./home.css";
import CartContainer from "../../components/cartContainer/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../../features/cart/cartSlice";
const Home = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div>
      <CartContainer />
    </div>
  );
};
export default Home;
