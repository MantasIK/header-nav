import styles from "./Dropdown.module.scss";
import { dropdownItems } from "../../utils/dropdownItems";

const Dropdown = ({ currentMenu, mobile }) => (
  <>
    {mobile ? (
      <div className={styles.container}>
        {
          <ul className={styles.dropdownItems}>
            {dropdownItems[currentMenu].map((item, index) => (
              <li className={styles.dropdownItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
        }
      </div>
    ) : (
      <div className={styles.container}>
        {
          <ul className={styles.dropdownItems}>
            {dropdownItems[currentMenu].map((item, index) => (
              <li className={styles.dropdownItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
        }
      </div>
    )}
  </>
);

export default Dropdown;
