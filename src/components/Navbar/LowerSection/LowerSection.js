import styles from "./LowerSection.module.scss";
import { menuButtons } from "../utils/menuButtons";
import { menuIcons, searchIcon } from "../utils/menuIcons";
import { ReactComponent as Logo } from "../utils/logo.svg";

const LowerSection = () => (
  <div className={styles.container}>
    <div className={styles._leftSide}>
      <Logo className={styles._logo} />

      {
        <div className={styles._menuButtons}>
          {menuButtons.map((button) => (
            <button
              className={styles._menuButton}
              key={button.name}
              vlaue={button.val}
            >
              {button.name}
            </button>
          ))}
        </div>
      }
    </div>
    <div className={styles._rightSide}>
      <p>Search</p>
      <i className={searchIcon.class}></i>
    </div>
  </div>
);

export default LowerSection;
