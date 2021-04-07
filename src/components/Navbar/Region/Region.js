import styles from "./RegionComponent.module.scss";
import { useState } from "react";
import flag from "../utils/flag.png";

const Region = ({ customStyles }) => {
  const [region] = useState({
    flag: flag,
    lang: "EN",
  });

  const STYLES = customStyles ? customStyles : styles;

  return (
    <div className={STYLES.RegionContainer}>
      <img
        src={region.flag}
        alt="flag"
        className={STYLES.RegionContainer_flag}
      />
      <p>{region.lang}</p>
    </div>
  );
};

export default Region;
