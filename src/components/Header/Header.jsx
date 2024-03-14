import React from "react";
import styles from "./Header.module.css";
import classnames from "classnames";
import { icons } from "../../assets";

const Header = () => {
  return (
    <header className={classnames(styles.headerContainer)}>
      <h2 className={classnames(styles.title)}>Заказы</h2>
      <div className={classnames(styles.headerSelect)}>
        <button>На вынос</button>
        <button>В заведении</button>
      </div>
      <button className={classnames(styles.createButtnon)}>
        <img src={icons.notification_icon} alt="" />
      </button>
    </header>
  );
};

export default Header;
