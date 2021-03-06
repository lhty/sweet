import React, { useContext, useEffect } from "react";
import { Context } from "../../store/DataProvider";
import { UserContext } from "../../store/UserProvider";

import { useSpring, animated } from "react-spring";

import "./Cart.css";

const Cart = () => {
  const { cart, cartDispath } = useContext(Context);
  const { setActive, active } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("cart"))
      cartDispath({
        type: "CART_RETRIVE",
      });
  }, [cartDispath]);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div
      className="cart"
      onClick={() => {
        if (cart.length > 0) {
          setActive({ ...active, cart: !active.cart });
        }
      }}
    >
      <Bucket cart={cart} />
    </div>
  );
};

export default Cart;

const Bucket = ({ cart }) => {
  const [{ scale }, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 120, friction: 5 },
  }));

  let bundleQuantity = cart.reduce(
    (total, { quantity }) => total + quantity,
    0
  );

  useEffect(() => {
    set({ to: [{ scale: 1.05 }, { scale: 1 }] });
  }, [cart, set]);
  return (
    <>
      <animated.svg
        style={{ scale }}
        viewBox="0 0 50 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.0023 40.8C39.3469 40.8 38.6978 40.9321 38.0926 41.1887C37.4873 41.4453 36.9377 41.8214 36.4754 42.2953C36.0131 42.7692 35.6471 43.3316 35.3986 43.9502C35.15 44.5689 35.0238 45.2315 35.027 45.9C35.027 48.7177 37.2372 51 40.0023 51C41.3285 51 42.6003 50.4627 43.5381 49.5062C44.4758 48.5498 45.0026 47.2526 45.0026 45.9C45.0026 44.5474 44.4758 43.2502 43.5381 42.2938C42.6003 41.3373 41.3285 40.8 40.0023 40.8ZM0 0V5.1H5.00029L13.9908 24.4468L10.6106 30.6994C10.1932 31.4765 9.98149 32.351 9.99628 33.2369C10.0111 34.1227 10.2519 34.9894 10.695 35.7515C11.1381 36.5135 11.7682 37.1447 12.5232 37.5828C13.2783 38.0209 14.1322 38.2509 15.0009 38.25H45.0026V33.15H16.0559C15.9477 33.1494 15.8415 33.1202 15.7477 33.0652C15.6539 33.0101 15.5756 32.9312 15.5207 32.8361C15.4658 32.741 15.436 32.633 15.4343 32.5226C15.4325 32.4123 15.459 32.3033 15.5109 32.2065L17.7535 28.05H36.3796C37.2713 28.0498 38.1467 27.8064 38.9151 27.345C39.6835 26.8837 40.317 26.2211 40.7499 25.426L49.6904 8.8791C49.8997 8.49104 50.0063 8.05408 49.9997 7.61123C49.9931 7.16838 49.8735 6.73492 49.6528 6.35354C49.432 5.97215 49.1176 5.65599 48.7406 5.43619C48.3636 5.21638 47.937 5.10052 47.5028 5.1H10.5306L8.16298 0H0ZM14.9984 40.8C14.3429 40.8 13.6939 40.9321 13.0886 41.1887C12.4834 41.4453 11.9338 41.8214 11.4714 42.2953C11.0091 42.7692 10.6432 43.3316 10.3946 43.9502C10.1461 44.5689 10.0198 45.2315 10.0231 45.9C10.0231 48.7177 12.2357 51 14.9984 51C16.3245 51 17.5964 50.4627 18.5341 49.5062C19.4719 48.5498 19.9987 47.2526 19.9987 45.9C19.9987 44.5474 19.4719 43.2502 18.5341 42.2938C17.5964 41.3373 16.3245 40.8 14.9984 40.8Z"
          fill={`${cart.length === 0 ? "#DEDEDE" : "#E4BFA0"}`}
        />
      </animated.svg>
      {cart.length > 0 && (
        <animated.div style={{ scale }} className="cart-counter">
          {bundleQuantity > 99 ? 99 : bundleQuantity}
        </animated.div>
      )}
    </>
  );
};
