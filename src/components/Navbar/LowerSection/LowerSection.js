import styles from "./LowerSection.module.scss";
import { useState } from "react";
import { menuButtons } from "../utils/menuButtons";
import { menuIcons } from "../utils/menuIcons";
import { ReactComponent as Logo } from "../utils/logo.svg";

import Cart from "../Cart/Cart";
import MobileMenuFooter from "./MobileMenuFooter/MobileMenuFooter";
import Dropdown from "./Dropdown/Dropdown";

const LowerSection = () => {
  const [currentDropdown, setCurrentDropdown] = useState(false);
  const [mobileMenuActive, setMobileMenu] = useState(false);

  const openMenu = (e) => {
    currentDropdown === e.target.value
      ? setCurrentDropdown(false)
      : setCurrentDropdown(e.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenuActive);
  };

  const activeButtonClass = `${styles.menuButton} ${styles.menuButton__active}`;
  const regButtonClass = styles.menuButton;

  const desktopMenuClasses = {
    menu: styles.menuButtonList,
    rightIcon: ``,
  };

  const mobileMenuClasses = {
    menu: styles.menuButtonList__mobile,
    rightIcon: `${menuIcons.rightIcon} ${styles.rightIcon__mobile}`,
  };

  const activeMenuClass = mobileMenuActive
    ? mobileMenuClasses
    : desktopMenuClasses;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <i
            className={`${menuIcons.burgerIcon} ${styles.burgerMenu} icon`}
            onClick={toggleMobileMenu}
          />
          <Logo className={styles.logo} />
          {
            <div className={activeMenuClass.menu}>
              {mobileMenuActive ? (
                <div className={styles.mobileMenuBanner}>
                  Menu
                  <i
                    className={`${menuIcons.closeIcon} icon`}
                    onClick={toggleMobileMenu}
                  />
                </div>
              ) : null}

              {menuButtons.map((button) => (
                <button
                  className={
                    currentDropdown === button.name
                      ? activeButtonClass
                      : regButtonClass
                  }
                  key={button.name}
                  value={button.name}
                  onClick={openMenu}
                >
                  {button.name} <i className={activeMenuClass.rightIcon} />
                </button>
              ))}

              {mobileMenuActive ? <MobileMenuFooter /> : null}
            </div>
          }
        </div>

        <div className={styles.rightSide}>
          <p>Search</p>
          <i className={`${menuIcons.searchIcon} ${styles.searchIcon} icon`} />
          <i className={`${menuIcons.userIcon} ${styles.profile} icon`} />
          <Cart customStyles={styles} />
        </div>
      </div>

      {currentDropdown ? (
        <Dropdown
          currentMenu={currentDropdown}
          mobile={mobileMenuActive ? true : false}
        />
      ) : null}
    </div>
  );
};

export default LowerSection;
