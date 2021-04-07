import { useState } from "react";
import styles from "./UpperSection.module.scss";
import { menuIconsArray } from "../utils/menuIcons";
import flag from "../utils/flag.png";

import Cart from "../Cart/Cart";

const UpperSection = () => {
  const [region] = useState({ flag: flag, lang: "EN" });

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <img src={region.flag} alt="flag" className={styles.flag} />
        <p>{region.lang}</p>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.icons}>
          {menuIconsArray.map((icon) => (
            <i className={`${icon.class} icon`} key={icon.class}></i>
          ))}
        </div>
        <Cart customStyles={styles} />
      </div>
    </div>
  );
};

export default UpperSection;
