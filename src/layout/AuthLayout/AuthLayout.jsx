import React from "react";
import styles from "./AuthLayout.module.css";
import { images } from "../../assets";

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.rightContainer}>
          <img src={images.auth_image} alt="" />
        </div>
        <div className={styles.leftContainer}>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
