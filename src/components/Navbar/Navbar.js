import { useState } from "react";
import styles from "./Navbar.module.scss";
import UpperSection from "./UpperSection/UpperSection";
import LowerSection from "./LowerSection/LowerSection";
import Menu from "./Menu/Menu";

const Navbar = () => {
  const [currentMenu, setCurrentMenu] = useState(false);

  return (
    <nav className={styles.container}>
      <UpperSection />
      <LowerSection changeMenu={setCurrentMenu} />
      {currentMenu ? <Menu currentMenu={currentMenu} /> : null}
    </nav>
  );
};

export default Navbar;
