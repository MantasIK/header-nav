import { useState } from "react";
import styles from "./UpperSection.module.scss";
import { menuIcons, cartIcon } from "../utils/menuIcons";
import flag from "../utils/flag.png";

const UpperSection = () => {
  const [cartValue, setCartValue] = useState(3);
  const [region, setRegion] = useState({ flag: flag, lang: "EN" });

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={region.flag} alt="flag" className={styles.flag} />
        <p>{region.lang}</p>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.icons}>
          {menuIcons.map((icon) => (
            <i
              className={icon.class}
              key={icon.class}
              style={{ cursor: "pointer" }}
            ></i>
          ))}
        </div>
        <div className={styles.cart}>
          <i className={cartIcon.class}></i>
          <div className={styles.cart_value}>{cartValue}</div>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
