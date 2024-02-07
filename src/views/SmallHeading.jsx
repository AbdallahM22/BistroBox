import React from "react";
import styles from "./SmallHeading.module.css";
const SmallHeading = ({ children, style = {} }) => {
  return (
    <h5 className={styles.head} style={style}>
      {children}
    </h5>
  );
};

export default SmallHeading;
