import { useState } from "react";
import styles from "./UpperSection.module.scss";
import { menuIcons, cartIcon } from "../utils/menuIcons";
import flag from "../utils/flag.png";

const UpperSection = () => {
  const [cartValue, setCartValue] = useState(3);
  const [region, setRegion] = useState({ flag: flag, lang: "EN" });

  return (
    <div className={styles.container}>
      <div className={styles._leftSide}>
        <img src={region.flag} alt="flag" className={styles._flag} />
        <p>{region.lang}</p>
      </div>

      <div className={styles._rightSide}>
        <div className={styles._icons}>
          {menuIcons.map((icon) => (
            <i
              className={icon.class}
              key={icon.class}
              style={{ cursor: "pointer" }}
            ></i>
          ))}
        </div>
        <div className={styles._cart}>
          <i className={cartIcon.class}></i>
          <div className={styles._cart__value}>{cartValue}</div>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
