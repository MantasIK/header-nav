import styles from "./Menu.module.scss";
import { menuItems } from "../utils/menuItems";

const Menu = ({ currentMenu }) => {
  return (
    <div className={styles.container}>
      {
        <ul className={styles.menuItems}>
          {menuItems[currentMenu].map((item, index) => (
            <li className={styles.menuItem} key={index}>
              {item}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};
export default Menu;
