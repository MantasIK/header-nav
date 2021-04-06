import styles from "./LowerSection.module.scss";
import { menuItems } from "../utils/menuItems";
import { menuIcons } from "../utils/menuIcons";
import { ReactComponent as Logo } from "../utils/logo.svg";

const LowerSection = () => (
  <div className={styles.LowerSection}>
    <div className={styles.LowerSection_leftSide}>
      <Logo className={styles.LowerSection_logo} />

      {
        <div className={styles.LowerSection_menuItems}>
          {menuItems.map((item) => (
            <button className={item.class} key={item.name} vlaue={item.val}>
              {item.name}
            </button>
          ))}
        </div>
      }
    </div>
  </div>
);

export default LowerSection;
