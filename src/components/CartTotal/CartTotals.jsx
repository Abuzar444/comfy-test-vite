import React from "react";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import styles from "./CartTotal.module.css";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <section className={styles.se}>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to={"/checkout"} className={`${styles.bt} btn`}>
            proceed to checkout
          </Link>
        ) : (
          <button
            type="button"
            className={`${styles.bt} btn`}
            onClick={loginWithRedirect}
          >
            login
          </button>
        )}
      </div>
    </section>
  );
};

export default CartTotals;
