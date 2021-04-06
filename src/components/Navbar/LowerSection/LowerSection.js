import { useState } from "react";
import styles from "./LowerSection.module.scss";
import { menuButtons } from "../utils/menuButtons";
import { searchIcon } from "../utils/menuIcons";
import { ReactComponent as Logo } from "../utils/logo.svg";

const LowerSection = ({ changeMenu }) => {
  const [currentActive, setCurrentActive] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();

    if (currentActive === e.target.value) {
      setCurrentActive(false);
      changeMenu(false);
    } else {
      setCurrentActive(e.target.value);
      changeMenu(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo className={styles.logo} />
        {
          <div className={styles.menuButtonList}>
            {menuButtons.map((button) => (
              <button
                className={
                  currentActive === button.name
                    ? `${styles.menuButton} ${styles.menuButton__active}`
                    : styles.menuButton
                }
                key={button.name}
                value={button.name}
                onClick={openMenu}
              >
                {button.name}
              </button>
            ))}
          </div>
        }
      </div>
      <div className={styles.rightSide}>
        <p>Search</p>
        <i className={searchIcon.class}></i>
      </div>
    </div>
  );
};

export default LowerSection;
