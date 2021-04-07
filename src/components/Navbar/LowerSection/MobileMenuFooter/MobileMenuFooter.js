import styles from "./MobileMenuFooter.module.scss";
import { menuIcons } from "../../utils/menuIcons";
import Region from "../../Region/Region";

const MobileMenuFooter = () => (
  <div className={styles.container}>
    <div className={styles.link}>
      <i className={`${menuIcons.questionIcon} `} />
      <p>Help</p>
      <i className={`${menuIcons.rightIcon} `} />
    </div>

    <div className={styles.link}>
      <i className={`${menuIcons.mapIcon} `} />
      <p>Where to Buy/Rent</p>
    </div>

    <div className={styles.link}>
      <i className={`${menuIcons.shieldIcon} `} />
      <p>Safety</p>
    </div>

    <Region customStyles={styles} />
  </div>
);

export default MobileMenuFooter;
