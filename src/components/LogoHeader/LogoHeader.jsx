import React from "react";
import styles from "./LogoHeader.module.css";
import { icons } from "../../assets";

const LogoHeader = () => {
  return (
    <div className={styles.headerLogoMono}>
      <img src={icons.neocafe_color} alt="NeoCafe" />
    </div>
  );
};

export default LogoHeader;
