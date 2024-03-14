import React from "react";
import styles from "./SideBar.module.css";
// import { navigateName } from "../../routes/routesHelpers";
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";
import { navigateName } from "../../routes/RouteHelpers";
import { icons } from "../../assets";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.sideBar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={icons.neocafe_mono} alt="" />
        </div>
        {navigateName.map((elem) => {
          return (
            <NavLink
              to={elem.route}
              key={elem.name}
              className={
                pathname == elem.route ? styles.buttonActive : styles.button
              }
            >
              <img src={elem.image} alt="icon" />
              {elem.name}
            </NavLink>
          );
        })}{" "}
      </div>
      <div className={styles.outButton}>
        <NavLink
          to={"/"}
          className={styles.button}
          onClick={() => {
            outOffApp();
          }}
        >
          <img src={icons.exit_icon} alt="" />
          Выход
        </NavLink>{" "}
      </div>
    </nav>
  );
};

export default SideBar;
