import React from "react";
import styles from "./SideBar.module.css";
// import { navigateName } from "../../routes/routesHelpers";
import { NavLink, useLocation } from "react-router-dom";
import classnames from "classnames";
import { navigateName } from "../../routes/RouteHelpers";
import { icons } from "../../assets";
import { showModal } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";

const SideBar = () => {
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const handleModalShow = () => {
    dispatch(showModal({ modalType: "LogoutModal" }));
  };

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
          // to={"/"}
          className={styles.button}
          // onClick={() => {
          //   outOffApp();
          // }}
          onClick={handleModalShow}
        >
          <img src={icons.exit_icon} alt="" />
          Выход
        </NavLink>{" "}
      </div>
    </nav>
  );
};

export default SideBar;
