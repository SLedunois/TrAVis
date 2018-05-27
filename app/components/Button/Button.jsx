import React from "react";
import { PropTypes } from "prop-types";

import AddIcon from "../../icons/Add";

import styles from "./styles.css";

const Button = props => {
  const { value } = props;
  let contentType;
  switch (props.type) {
    case "BUTTON":
      contentType = "";
      break;
    case "ADD":
      contentType = <AddIcon />;
      break;
    default:
      contentType = "";
  }
  const className = `uppercase pointer ${styles.button} ${styles[props.type]}`;
  return (
    <button className={className}>
      {contentType} {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: "ACTION"
};

export default Button;
