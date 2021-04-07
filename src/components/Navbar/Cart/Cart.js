import { useState } from "react";
import styles from "./CartComponent.module.scss";
import { menuIcons } from "../utils/menuIcons";

const Cart = ({ customStyles }) => {
  const [cartValue] = useState(3);

  const STYLES = customStyles ? customStyles : styles;

  return (
    <div className={STYLES.cart}>
      <i className={menuIcons.cartIcon}></i>
      <div className={STYLES.cart_value}>{cartValue}</div>
    </div>
  );
};

export default Cart;
