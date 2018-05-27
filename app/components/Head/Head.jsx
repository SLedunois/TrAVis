import React from "react";
import { PropTypes } from "prop-types";

import styles from "./styles.css";

const Head = props => {
  const { children } = props;
  return <div className={styles.head}>{children}</div>;
};

Head.propTypes = {
  children: PropTypes.array
};

Head.defaultProps = {
  children: []
};

export default Head;
