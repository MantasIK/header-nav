import styles from "./Navbar.module.scss";
import UpperSection from "./UpperSection/UpperSection";
import LowerSection from "./LowerSection/LowerSection";

const Navbar = () => (
  <nav className={styles.Navbar}>
    <UpperSection />
    <LowerSection />
  </nav>
);

export default Navbar;
