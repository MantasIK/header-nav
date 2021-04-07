import styles from "./UpperSection.module.scss";
import { menuIconsArray } from "../utils/menuIcons";
import Region from "../Region/Region";
import Cart from "../Cart/Cart";

const UpperSection = () => {
  return (
    <div className={styles.container}>
      <Region customStyles={styles} />
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
