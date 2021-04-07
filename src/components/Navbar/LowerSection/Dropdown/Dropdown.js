import styles from "./Dropdown.module.scss";
import { dropdownItems } from "../../utils/menuData";
import { menuIcons } from "../../utils/menuIcons";

const Dropdown = ({ currentMenu, mobile, closeDropdown }) => (
  <div className={styles.container}>
    <div className={styles.dropdownList}>
      {mobile ? (
        <button
          className={styles.dropdownItem}
          onClick={() => closeDropdown(false)}
        >
          <i className={`${menuIcons.leftIcon} ${styles.leftArrow}`} />
          <p>Go Back</p>
        </button>
      ) : null}

      {dropdownItems[currentMenu].map((item, index) => (
        <button className={styles.dropdownItem} key={index}>
          <p>{item}</p>
          <i className={`${menuIcons.rightIcon} ${styles.arrow}`} />
        </button>
      ))}
    </div>
  </div>
);

export default Dropdown;
