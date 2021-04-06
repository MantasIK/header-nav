import { useState } from "react";
import styles from "./UpperSection.module.scss";
import { menuIcons } from "../utils/menuIcons";
import flag from "../utils/flag.png";

const UpperSection = () => {
  const [cartValue, setCartValue] = useState(3);
  const [region, setRegion] = useState({ flag: flag, lang: "EN" });

  return (
    <div className={styles.UpperSection}>
      <div className={styles.UpperSection_leftSide}>
        <img
          src={region.flag}
          alt="flag"
          className={styles.UpperSection_flag}
        />
        <p>{region.lang}</p>
      </div>

      <div className={styles.UpperSection_rightSide}>
        <div className={styles.UpperSection_icons}>
          {menuIcons.map((icon) => (
            <i className={icon.class} key={icon.class}></i>
          ))}
        </div>
        <div className={styles.UpperSection_cart}>
          <i className="fas fa-shopping-cart"> {" " + cartValue}</i>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
