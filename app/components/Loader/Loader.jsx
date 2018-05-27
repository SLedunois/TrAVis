import React from "react";
import Logo from "../../icons/Logo";

import styles from "./styles.css";

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.logo}>
      <Logo />
    </div>
  </div>
);

export default Loader;
