import React, { useState } from "react";
import styles from "./Header.module.css";
import classnames from "classnames";
import { useLocation } from "react-router-dom";
import { icons } from "../../assets";
import { headersName } from "../../helpers/HeadersName";
import Notifications from "../Notifications/Notifications";

const Header = () => {
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const { pathname } = useLocation();
  console.log(pathname, "PATH NAME");

  const [selectedOrderType, setSelectedOrderType] = useState("takeaway");
  const handleOrderTypeSelection = (ordertype) => {
    setSelectedOrderType(ordertype);
  };

  const openNotification = () => {
    setIsOpenNotification(!isOpenNotification);
  };

  return (
    <header className={classnames(styles.headerContainer)}>
      <h2 className={classnames(styles.title)}>{headersName[pathname]}</h2>
      {pathname === "/menu" ? (
        <label className={classnames(styles.input)} htmlFor="">
          <img src={icons.search_icon} alt="" />
          <input type="text" placeholder="Поиск" />
        </label>
      ) : (
        <div className={classnames(styles.headerSelect)}>
          <div className={styles.ordertypebtns_wrapper}>
            <button
              className={classnames(
                styles.orderplace_btn,
                styles.takeaway_btn,
                {
                  [styles.selectedOrderType]: selectedOrderType === "takeaway",
                }
              )}
              onClick={() => handleOrderTypeSelection("takeaway")}
            >
              {pathname == "/orders" ? "На вынос" : "Профиль"}
            </button>
            <button
              className={classnames(styles.orderplace_btn, styles.inplace_btn, {
                [styles.selectedOrderType]: selectedOrderType === "inplace",
              })}
              onClick={() => handleOrderTypeSelection("inplace")}
            >
              {pathname == "/orders" ? "В заведении" : "График работы"}
            </button>
          </div>
        </div>
      )}

      <button
        className={classnames(styles.createButtnon)}
        onClick={openNotification}
      >
        <img
          src={icons.notification_icon}
          alt="Notifications"
          className={styles.notifications_img}
          onClick={openNotification}
        />
      </button>

      {/* {isOpenNotification && ( */}
      <Notifications
        isOpen={isOpenNotification}
        className={`${styles.notificationBlock} ${
          isOpenNotification ? styles.notificationBlock_active : ""
        }`}
      />
      {/* // )} */}
    </header>
  );
};

export default Header;
